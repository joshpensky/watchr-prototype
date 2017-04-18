/*window.onload = function() {
    var addBtn = document.getElementsByClassName('show-header-info-btn')[0];
    addShow(addBtn);
}*/

var users;

window.addEventListener("load", function() {
    loadJSON("/data/userdata.json", function(response) {
        users = JSON.parse(response);
        loadShow();
    });
}, false);

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

function loadShow() {
    var thisUser,
        allShows = [],
        progress = [],
        showName = document.getElementsByClassName('show-header-info-title')[0].innerHTML,
        episodes = document.getElementsByClassName('episode-item');
    for (user in users) {
        if (user == "josh_jpeg") {
            thisUser = users[user];
        }
    }
    for (show in thisUser.shows) {
        var newShow = []
        newShow.push(show);
        newShow.push(thisUser.shows[show]);
        allShows.push(newShow);
    }
    for (show in allShows) {
        if (allShows[show][0] == showName) {
            var prog = allShows[show][1]['progress'];
            for (p in prog) {
                progress.push(prog[p]);
            }
        }
    }
    addShow(document.getElementsByClassName('show-header-info-btn')[0]);
    for (var i = 0; i < episodes.length; i++) {
        if (progress[i] == true) {
            episodes[i].classList.add('episode-item--watched');
        }
    }
    totalProgress();
}

function seeAll(seeAllBtn, className) {
    var list = document.getElementsByClassName(className)[0],
        allLists = document.getElementsByClassName('list'),
        allBtns = document.getElementsByClassName('section-header-seeall');
    if (list.classList.contains('see-all')) {
        list.classList.remove('see-all');
        seeAllBtn.classList.remove('section-header-seeall-open');
    } else {
        for(var i = 0; i < allLists.length; i++) {
            allLists[i].classList.remove('see-all');
        }
        list.classList.add('see-all');
        for(var i = 0; i < allBtns.length; i++) {
            allBtns[i].classList.remove('section-header-seeall-open');
        }
        seeAllBtn.classList.add('section-header-seeall-open');
    }
}

function markAsWatched(button, add) {
    var selSeason = document.getElementsByClassName('media-sel-item--selected')[0],
        whichSeason = selSeason.getElementsByClassName('media-sel-item-title')[0].innerHTML.toLowerCase(),
        season = whichSeason.split(" ");
    whichSeason = "";
    for (var i = 0; i < season.length; i++) {
        whichSeason += season[i];
        if (i < season.length - 1) {
            whichSeason += "-";
        }
    }
    var seasonCont = document.getElementsByClassName(whichSeason)[0],
        episodes = seasonCont.getElementsByClassName('episode-item'),
        epIndex = 0;
    for (var i = 0; i < episodes.length; i++) {
        var markButton = episodes[i].getElementsByClassName('episode-item-button--mark-cont')[0],
            unmarkButton = episodes[i].getElementsByClassName('episode-item-button--unmark-cont')[0];
        if (markButton === button || unmarkButton === button) {
            epIndex = i;
        }
    }
    if (add) {
        episodes[epIndex].classList.add('episode-item--watched');
    } else {
        episodes[epIndex].classList.remove('episode-item--watched');
    }
    console.log(episodes[epIndex]);
    totalProgress();
}

function totalProgress() {
    var show = document.getElementsByClassName('content')[0],
        episodes = document.getElementsByClassName('episode-item'),
        addBtn = document.getElementsByClassName('show-header-info-btn')[0],
        addBtnType = addBtn.getElementsByClassName('show-header-info-btn-type')[0],
        progress = document.getElementsByClassName('show-header-progress')[0],
        progressBar = progress.getElementsByClassName('show-header-progress-bar')[0],
        episodes = document.getElementsByClassName('episode-item'),
        watched = 0;
    for (var i = 0; i < episodes.length; i++) {
        if (episodes[i].classList.contains('episode-item--watched')) {
            watched += 1;
        }
    }
    watched = (watched / episodes.length) * 100;
    progressBar.style.width = watched + "%";
    if (watched >= 100) {
        progress.classList.add('show-finished');
        show.classList.remove('added');
        show.classList.add('finished');
        addBtnType.innerHTML = "Finished";
        addBtn.classList.remove('show-added');
        addBtn.classList.add('show-finished');
    } else {
        progress.classList.remove('show-finished');
        show.classList.remove('finished');
        show.classList.add('added');
        addBtnType.innerHTML = "Added";
        addBtn.classList.remove('show-finished');
        addBtn.classList.add('show-added');
    }
}

function remShow() {
    var show = document.getElementsByClassName('content')[0],
        episodes = document.getElementsByClassName('episode-item'),
        addBtn = document.getElementsByClassName('show-header-info-btn')[0],
        addBtnType = addBtn.getElementsByClassName('show-header-info-btn-type')[0],
        rmvBtn = document.getElementsByClassName('show-header-rmv-btn')[0],
        progress = document.getElementsByClassName('show-header-progress')[0],
        progressBar = progress.getElementsByClassName('show-header-progress-bar')[0];
    rmvBtn.style.display = "none";
    addBtnType.innerHTML = "Add to Watchlist";
    addBtn.classList.remove('show-added');
    addBtn.classList.remove('show-finished');
    show.classList.remove('added');
    show.classList.remove('finished');
    progress.style.display = "none";
    progressBar.style.width = "0%";
    for (var i = 0; i < episodes.length; i++) {
        episodes[i].classList.remove('episode-item--watched');
        episodes[i].classList.add('episode-item--not-added');
    }
}

function addShow(addBtn) {
    var show = document.getElementsByClassName('content')[0],
        episodes = document.getElementsByClassName('episode-item'),
        addBtnType = addBtn.getElementsByClassName('show-header-info-btn-type')[0],
        rmvBtn = document.getElementsByClassName('show-header-rmv-btn')[0],
        progress = document.getElementsByClassName('show-header-progress')[0],
        progressBar = progress.getElementsByClassName('show-header-progress-bar')[0];
    console.log(addBtn);
    if (!show.classList.contains('added') && !show.classList.contains('finished')) {
        rmvBtn.style.display = "inline-block";
        addBtnType.innerHTML = "Added";
        show.classList.add('added');
        addBtn.classList.add('show-added');
        progress.style.display = "block";
        progressBar.style.width = "0%";
        for (var i = 0; i < episodes.length; i++) {
            episodes[i].classList.remove('episode-item--not-added');
        }
    } else if (show.classList.contains('added') && !show.classList.contains('finished')) {
        show.classList.remove('added');
        show.classList.add('finished');
        addBtnType.innerHTML = "Finished";
        addBtn.classList.remove('show-added');
        addBtn.classList.add('show-finished');
        progressBar.style.width = "100%";
        for (var i = 0; i < episodes.length; i++) {
            episodes[i].classList.add('episode-item--watched');
        }
    } else if (show.classList.contains('finished') && !show.classList.contains('added')) {
        progressBar.style.width = "0%";
        for (var i = 0; i < episodes.length; i++) {
            episodes[i].classList.remove('episode-item--watched');
        }
    }
    totalProgress();
}
