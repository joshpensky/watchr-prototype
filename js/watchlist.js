var allShows,
    users,
    thisUser;

window.addEventListener("load", function() {
    readFile(function(u, s) {
        users = u;
        allShows = s;
        getUser();
        createShows();
        initShows();
    });
}, false);

function getUser() {
    for (user in users) {
        if (user == "josh_jpeg") {
            thisUser = users[user];
        }
    }
}

function createShows() {
    var shows = thisUser.shows,
        showsCont = document.querySelector(".shows"),
        watchlist = showsCont.querySelector(".watchlist"),
        showList = [];
    console.log(shows);
    for (show in shows) {
        for (aShow in allShows) {
            if (show === aShow) {
                showList.push({user: shows[show].progress, showInfo: allShows[aShow]});
            }
        }
    }
    for (show in showList) {
        var userProg = showList[show].user,
            showInfo = showList[show].showInfo,
            totalProg = 0,
            lastWatched = 0,
            epTitle = "",
            epId = "";
        for (prog in userProg) {
            if (userProg[prog] == true) {
                lastWatched = parseInt(prog);
                totalProg += 1;
            }
        }
        for (ssn in showInfo.seasons) {
            for (ep in showInfo.seasons[ssn]) {
                if (lastWatched == 0) {
                    epTitle = showInfo.seasons[ssn][ep].title;
                    epId = ssn + ep;
                }
                lastWatched -= 1;
            }
        }

        if (epTitle != "") {
            var url = showInfo.title.toLowerCase().split(" "),
                finalUrl = "";
            for (var i = 0; i < url.length; i++) {
                finalUrl += url[i] + ((i < url.length - 1) ? "_" : "");
            }

            var showItem = document.createElement("li"),
                showCover = document.createElement("a"),
                showProg = document.createElement("div"),
                showProgBar = document.createElement("div"),
                showTopInfo = document.createElement("div"),
                showEpType = document.createElement("div"),
                showEpTitle = document.createElement("p"),
                showBotInfo = document.createElement("div"),
                showEpId = document.createElement("div"),
                showTitle = document.createElement("p");
            showItem.classList.add("show");
            showCover.classList.add("show-cover");
            showCover.style.backgroundImage = "url(" + showInfo.cover + ")";
            showCover.href = "/shows/" + finalUrl + ".php";
            showProg.classList.add("show-progress");
            showProgBar.classList.add("show-progress--bar");
            showTopInfo.classList.add("show--top-info");
            showEpType.classList.add("show-episode--type");
            showEpType.classList.add("show-episode--type--empty");
            showEpTitle.classList.add("show-episode--title");
            showEpTitle.innerHTML = epTitle;
            showBotInfo.classList.add("show--bottom-info");
            showEpId.classList.add("show-episode--id");
            showEpId.innerHTML = epId;
            showTitle.classList.add("show-title");
            showTitle.innerHTML = showInfo.title;

            var markBtn = document.createElement("div"),
                markBtnImg = document.createElement("div"),
                markBtnType = document.createElement("p");
            markBtn.classList.add("show-button");
            markBtn.classList.add("show-button--mark-cont");
            markBtn.addEventListener("click", function(){markAsWatched(this);}, false);
            markBtnImg.classList.add("show-button--mark");
            markBtnType.innerHTML = "Mark as Watched";
            markBtn.appendChild(markBtnImg);
            markBtn.appendChild(markBtnType);

            var watchBtn = document.createElement("div"),
                watchBtnImg = document.createElement("div"),
                watchBtnType = document.createElement("p");
            watchBtn.classList.add("show-button");
            watchBtn.classList.add("show-button--watch-cont");
            watchBtnImg.classList.add("show-button--watch");
            watchBtnType.innerHTML = "Watch Now";
            watchBtn.appendChild(watchBtnImg);
            watchBtn.appendChild(watchBtnType);

            showProg.appendChild(showProgBar);
            showTopInfo.appendChild(showEpType);
            showTopInfo.appendChild(showEpTitle);
            showBotInfo.appendChild(showEpId);
            showBotInfo.appendChild(showTitle);
            showItem.appendChild(showCover);
            showItem.appendChild(showProg);
            showItem.appendChild(showTopInfo);
            showItem.appendChild(showBotInfo);
            showItem.appendChild(markBtn);
            showItem.appendChild(watchBtn);
            watchlist.appendChild(showItem);
            /*
            <ul class="watchlist">
                <li class="show">
                    <a href="/shows/legion.php" class="show-cover" id="legion"></a>
                    <div class="show-progress">
                        <div class="show-progress--bar"></div>
                    </div>
                    <div class="show--top-info">
                        <div class="show-episode--type show-episode--type--empty"></div>
                        <p class="show-episode--title">Chapter 8</p>
                    </div>
                    <div class="show--bottom-info">
                        <div class="show-episode--id">S01E08</div>
                        <p class="show-title">Legion</p>
                    </div>
                    <div class="show-button show-button--mark-cont" onclick="markAsWatched(this);">
                        <div class="show-button--mark"></div>
                        <p>Mark as Watched</p>
                    </div>
                    <div class="show-button show-button--watch-cont">
                        <div class="show-button--watch"></div>
                        <p>Watch Now</p>
                    </div>
                </li>
                */
        }
    }
    if (!watchlist.hasChildNodes()) {
        console.log(buildEmpty("You suck", ""));
        watchlist.appendChild(buildEmpty("Your watchlist is currently empty.", "Find shows to watch"));
    }
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
            updateData(showName, currEp + 1);
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
            updateData(showName, currEp);
            //console.log(nextEp[0]);
            epID.innerHTML = nextEp[0];
            epTitle.innerHTML = nextEp[1].title;
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

function updateData(showName, epNum) {
    for (show in thisUser.shows) {
        if (show == showName) {
            for (ep in thisUser.shows[show].progress) {
                if (parseInt(ep) == epNum) {
                    thisUser.shows[show].progress[ep] = true;
                }
            }
        }
    }
    for (user in users) {
        if (user == thisUser.username) {
            users[user] = thisUser;
        }
    }
    writeToFile(users, "userdata.json");
}
