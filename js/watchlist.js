var allShows;

window.onload = function() {
    loadJSON("/data/shows.json", function(response) {
        allShows = JSON.parse(response);
        initShows();
    });
}

function loadJSON(file, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function getShow(showName) {
    var seasonsArray = [];
    var jsonSeasons;
    if (showName in allShows) {
        showSeasons = allShows[showName].seasons;
    }
    for (var ssn in showSeasons) {
        var season = []
        for (var ep in showSeasons[ssn]) {
            var episode = [ssn + ep, showSeasons[ssn][ep]];
            season.push(episode);
        }
        seasonsArray.push(season);
    }
    return seasonsArray;
}

function getEpisodeCount(showArray) {
    var numEpisodes = 0;
    for (var i = 0; i < showArray.length; i++) {
        for (var j = 0; j < showArray[i].length; j++) {
            numEpisodes += 1;
        }
    }
    return numEpisodes;
}

function getCurrEp(showArray, epID) {
    var currEp = 0,
        found = false;

    for (var i = 0; i < showArray.length; i++) {
        for (var j = 0; j < showArray[i].length; j++) {
            if (showArray[i][j][0] === epID.innerHTML) {
                found = true;
            } else if (!found) {
                currEp += 1;
            }
        }
    }
    return currEp;
}

function isPremiere(showArray, epID) {
    for (var i = 0; i < showArray.length; i++) {
        if (epID === showArray[i][0][0]) {
            return true;
        }
    }
    return false;
}

function isFinale(showArray, epID) {
    for (var i = 0; i < showArray.length; i++) {
        if (epID === showArray[i][showArray[i].length - 1][0]) {
            return true;
        }
    }
    return false;
}

function initShows() {
    var shows = document.getElementsByClassName('show');
    for (var i = 0; i < shows.length; i++) {
        var chosenShow = shows[i],
            showName = chosenShow.getElementsByClassName('show-title')[0].innerHTML,
            showArray = getShow(showName),
            epCount = getEpisodeCount(showArray),
            progressBar = chosenShow.getElementsByClassName('show-progress--bar')[0],
            increase = (1 / epCount) * 100,
            episodeType = chosenShow.getElementsByClassName('show-episode--type')[0],
            epID = chosenShow.getElementsByClassName('show-episode--id')[0],
            soFar = getCurrEp(showArray, epID) * increase,
            premiere = isPremiere(showArray, epID.innerHTML),
            finale = isFinale(showArray, epID.innerHTML);

        progressBar.style.width = soFar + "%";

        if (soFar >= 100) {
            progressBar.style.width = 100 + "%";
            chosenShow.classList.add("show-finished");
            episodeType.innerHTML = "";
            episodeType.classList.add('show-episode--type--empty');
            var topInfo = chosenShow.getElementsByClassName('show--top-info')[0],
                bottomInfo = chosenShow.getElementsByClassName('show--bottom-info')[0],
                showBtns = chosenShow.getElementsByClassName('show-button'),
                epNameDiv = chosenShow.getElementsByClassName('show-episode--title')[0];
            epNameDiv.innerHTML = showName;
        } else if(finale) {
            episodeType.classList.remove('show-episode--type--empty');
            episodeType.innerHTML = "Finale";
        } else if (premiere) {
            episodeType.classList.remove('show-episode--type--empty');
            episodeType.innerHTML = "Premiere";
        } else {
            episodeType.classList.add('show-episode--type--empty');
        }
    }
}

function markAsWatched(button) {
    var shows = document.getElementsByClassName('show'),
        allBtns = document.getElementsByClassName('show-button--mark-cont')
        index = 0;
    for (var i = 0; i < allBtns.length; i++) {
        if (allBtns[i] === button) {
            index = i;
        }
    }
    var chosenShow = shows[index],
        showName = chosenShow.getElementsByClassName('show-title')[0].innerHTML,
        showArray = getShow(showName),
        epCount = getEpisodeCount(showArray),
        progressBar = chosenShow.getElementsByClassName('show-progress--bar')[0],
        increase = (1 / epCount) * 100,
        episodeType = chosenShow.getElementsByClassName('show-episode--type')[0],
        epID = chosenShow.getElementsByClassName('show-episode--id')[0],
        currEp = getCurrEp(showArray, epID),
        soFar = currEp * increase;
    progressBar.style.width = soFar + "%";
    if (soFar < 100) {
        if ((epCount - 1) == currEp) {
            progressBar.style.width = 100 + "%";
            chosenShow.classList.add("show-finished");
            episodeType.innerHTML = "";
            episodeType.classList.add('show-episode--type--empty');
            progressBar.classList.add('show-progress--bar--finished');
            var topInfo = chosenShow.getElementsByClassName('show--top-info')[0],
                bottomInfo = chosenShow.getElementsByClassName('show--bottom-info')[0],
                showBtns = chosenShow.getElementsByClassName('show-button'),
                epNameDiv = chosenShow.getElementsByClassName('show-episode--title')[0],
                showNameDiv = chosenShow.getElementsByClassName('show-title')[0];
            epNameDiv.innerHTML = showNameDiv.innerHTML;
        } else {
            var epID = chosenShow.getElementsByClassName('show-episode--id')[0],
                epTitle = chosenShow.getElementsByClassName('show-episode--title')[0],
                currEp = 1;
                nextEp = 0,
                found = false;

            for (var i = 0; i < showArray.length; i++) {
                for (var j = 0; j < showArray[i].length; j++) {
                    if (showArray[i][j][0] === epID.innerHTML) {
                        found = true;
                        if (j == showArray[i].length - 1) {
                            nextEp = showArray[i + 1][0];
                        } else {
                            nextEp = showArray[i][j + 1];
                        }
                    } else if (!found) {
                        currEp += 1;
                        nextEp += 1;
                    }
                }
            }
            //console.log(nextEp[0]);
            epID.innerHTML = nextEp[0];
            epTitle.innerHTML = nextEp[1];
            soFar = getCurrEp(showArray, epID) * increase;
            progressBar.style.width = soFar + "%";
            premiere = isPremiere(showArray, epID.innerHTML);
            finale = isFinale(showArray, epID.innerHTML);

            if(finale) {
                episodeType.classList.remove('show-episode--type--empty');
                episodeType.innerHTML = "Finale";
            } else if (premiere) {
                episodeType.classList.remove('show-episode--type--empty');
                episodeType.innerHTML = "Premiere";
            } else {
                episodeType.classList.add('show-episode--type--empty');
            }
        }
    }
}
