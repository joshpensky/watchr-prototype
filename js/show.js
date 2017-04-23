/*window.onload = function() {
    var addBtn = document.getElementsByClassName('show-header-info-btn')[0];
    addShow(addBtn);
}*/

var users,
    shows,
    thisShow;

window.addEventListener("load", function() {
    readFile(function(u, s) {
        users = u;
        shows = s;
        loadShow();
    });
}, false);

function loadShow() {
    var thisUser,
        allShows = [],
        progress = [],
        show =  window.location.href.split("/shows/")[1].split(".php")[0].split("_"),
        showName = "",
        episodes = document.getElementsByClassName('episode-item');
    for (var i = 0; i < show.length; i++) {
        showName += show[i][0].toUpperCase();
        for (var j = 1; j < show[i].length; j++) {
            showName += ((show[i][j - 1] == "-") ? show[i][j].toUpperCase() : show[i][j]);
        }
        if (i < show.length - 1) {
            showName += " ";
        }
    }
    console.log(showName);
    for (show in shows) {
        if (show === showName) {
            thisShow = shows[show];
        }
    }
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

    document.title = thisShow.title + " - watchr";
    initAbout();
    initEpisodes();
    initCast();
    initModalBtns();

    for (show in allShows) {
        if (allShows[show][0] == showName) {
            addShow(document.getElementsByClassName('show-header-info-btn')[0]);
            var prog = allShows[show][1]['progress'];
            for (p in prog) {
                progress.push(prog[p]);
            }
            for (var i = 0; i < episodes.length; i++) {
                if (progress[i] == true) {
                    episodes[i].classList.add('episode-item--watched');
                }
            }
            totalProgress();
        }
    }
    getFriendsWatching();
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

function initModalBtns() {
    var modalClose = document.querySelector(".modal-close"),
        modalSecBtn = document.querySelector(".modal-btn-secondary"),
        modalPrimBtn = document.querySelector(".modal-btn-primary"),
        showRmvBtn = document.querySelector(".show-header-rmv-btn");
    modalClose.addEventListener("click", function(){remModal(false, 'modal-remove--show', thisShow.title);}, false);
    modalSecBtn.addEventListener("click", function(){remShow(); remModal(false, 'modal-remove--show', thisShow.title);}, false);
    modalPrimBtn.addEventListener("click", function(){remModal(false, 'modal-remove--show', thisShow.title);}, false);
    showRmvBtn.addEventListener("click", function(){remModal(true, 'modal-remove--show', thisShow.title);}, false);
}

function initCast() {
    var castList = document.querySelector(".cast-list"),
        creators = thisShow.creators,
        cast = thisShow.cast;
    for (var i = 0; i < creators.length; i++) {
        var castItem = document.createElement("li"),
            castItemImg = document.createElement("div"),
            castItemName = document.createElement("div"),
            castItemRole = document.createElement("div");
        castItem.classList.add("cast-item");
        castItem.classList.add("cast-item--creator");
        castItemImg.classList.add("cast-item-img");
        if (creators[i].picture != "") {
            castItemImg.style.backgroundImage = "url(" + creators[i].picture + ")";
        }
        castItemName.classList.add("cast-item-name");
        castItemName.innerHTML = creators[i].name;
        castItemRole.classList.add("cast-item-role");
        castItemRole.innerHTML = ((creators.length > 1) ? "Co-Creator" : "Creator");
        castItem.appendChild(castItemImg);
        castItem.appendChild(castItemName);
        castItem.appendChild(castItemRole);
        castList.appendChild(castItem);
    }
    for (var i = 0; i < cast.length; i++) {
        var castItem = document.createElement("li"),
            castItemImg = document.createElement("div"),
            castItemName = document.createElement("div"),
            castItemRole = document.createElement("div");
        castItem.classList.add("cast-item");
        castItemImg.classList.add("cast-item-img");
        if (cast[i].picture != "") {
            castItemImg.style.backgroundImage = "url(" + cast[i].picture + ")";
        }
        castItemName.classList.add("cast-item-name");
        castItemName.innerHTML = cast[i].name;
        castItemRole.classList.add("cast-item-role");
        castItemRole.innerHTML = cast[i].role;
        castItem.appendChild(castItemImg);
        castItem.appendChild(castItemName);
        castItem.appendChild(castItemRole);
        castList.appendChild(castItem);
    }
    /*
    <ul class="list cast-list">
        <li class="cast-item cast-item--creator">
            <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTczOTU3NzY2NV5BMl5BanBnXkFtZTgwMjg3NDUzMDI@._V1_SY1000_CR0,0,1504,1000_AL_.jpg)"></div>
            <div class="cast-item-name">Noah Hawley</div>
            <div class="cast-item-role">Creator</div>
        </li>
    </ul>
    */
}

function initAbout() {
    var showTitle = document.querySelector(".show-header-info-title"),
        showYear = document.querySelector(".show-header-info-year"),
        showDesc = document.querySelector(".about-description"),
        showCover = document.querySelector(".show-header-cover"),
        hero = document.querySelector(".hero");
    showTitle.innerHTML = thisShow.title;
    showYear.innerHTML = thisShow.yearStart + " - " + ((thisShow.yearEnd == 0) ? "Present" : thisShow.yearEnd);
    showDesc.innerHTML = thisShow.description;
    if (thisShow.cover != "") {
        showCover.style.backgroundImage = "url(" + thisShow.cover + ")";
    }
    if (thisShow.hero != "") {
        hero.style.backgroundImage = "url(" + thisShow.hero + ")";
    }
    var detailsCont = document.querySelector(".about-details"),
        rating = document.createElement("p"),
        timing = document.createElement("p"),
        seasons = document.createElement("p");
    rating.classList.add("about-details-rating");
    rating.innerHTML = thisShow.rating;
    timing.classList.add("about-details-timing");
    timing.innerHTML = thisShow.length;
    seasons.classList.add("about-details-seasons");
    var numSns = 0;
    for (season in thisShow.seasons) {
        numSns += 1;
    }
    seasons.innerHTML = numSns + " Seasons";
    detailsCont.appendChild(rating);
    detailsCont.appendChild(timing);
    detailsCont.appendChild(seasons);
    /*
    <div class="about-details">
        <p class="about-details-rating">TV-MA</p>
        <p class="about-details-timing">55 min</p>
        <p class="about-details-seasons">3 Seasons</p>
    </div>
    */
    initGenres();
    initServices();
}

function initGenres() {
    var genresList = document.querySelector(".about-genres"),
        genres = thisShow.genres;
    for (var i = 0; i < genres.length; i++) {
        var url = genres[i].toLowerCase().split(" ")
            finalUrl = "";
        for (var j = 0; j < url.length; j++) {
            finalUrl += url[j];
        }
        url = finalUrl.split("-");
        finalUrl = "";
        for (var j = 0; j < url.length; j++) {
            finalUrl += url[j];
        }
        var genreItem = document.createElement("li"),
            genreItemImg = document.createElement("div"),
            genreItemType = document.createElement("div");
        genreItem.classList.add("about-genres-item");
        genreItemImg.classList.add("about-genres-item-img");
        genreItemImg.style.backgroundImage = "url('/img/genres/" + finalUrl + ".png')"
        genreItemType.classList.add("about-genres-item-type");
        genreItemType.innerHTML = genres[i];

        genreItem.appendChild(genreItemImg);
        genreItem.appendChild(genreItemType);
        genresList.appendChild(genreItem);
    }
    /*
    <ul class="about-genres">
        <li class="about-genres-item">
            <div class="about-genres-item-img" id="crime"></div>
            <div class="about-genres-item-type">Crime</div>
        </li>
        <li class="about-genres-item">
            <div class="about-genres-item-img" id="drama"></div>
            <div class="about-genres-item-type">Drama</div>
        </li>
        <li class="about-genres-item">
            <div class="about-genres-item-img" id="thriller"></div>
            <div class="about-genres-item-type">Thriller</div>
        </li>
    </ul>
    */
}

function initServices() {
    var services = thisShow.services,
        serviceList = document.querySelector(".about-streaming-servies");
    for (var i = 0; i < services.length; i++) {
        var serviceItem = document.createElement("li"),
            servicePic = document.createElement("img");
        serviceItem.classList.add("about-streaming-services-item");
        servicePic.src = "/img/services/" + services[i] + ".png";
        serviceItem.appendChild(servicePic);
        serviceList.appendChild(serviceItem);
    }
    /*
    <ul class="about-streaming-servies">
        <li class="about-streaming-services-item">
            <img src="/img/services/fxnow.png" />
        </li>
        <li class="about-streaming-services-item">
            <img src="/img/services/hulu.png" />
        </li>
    </ul>
    */
}

function initEpisodes() {
    var seasons = thisShow.seasons,
        seasonsSection = document.querySelector("#seasons"),
        mediaSel = document.createElement("div"),
        mediaSelCont = document.createElement("ul"),
        currSeason = 1;
    mediaSel.classList.add("media-sel");
    mediaSelCont.classList.add("media-sel-cont");
    mediaSel.appendChild(mediaSelCont);
    seasonsSection.appendChild(mediaSel);

    /*
    <div class="media-sel">
        <ul class="media-sel-cont">
            <li class="media-sel-item media-sel-item--selected" onclick="changeSection(this);">
                <div class="media-sel-item-title">Season 1</div>
            </li>
            <li class="media-sel-item" onclick="changeSection(this);">
                <div class="media-sel-item-title">Season 2</div>
            </li>
        </ul>
    </div>
    */

    for (season in seasons) {
        var mediaSelItem = document.createElement("li"),
            mediaSelItemTitle = document.createElement("div"),
            seasonCont = document.createElement("div"),
            epList = document.createElement("ul"),
            episodes = seasons[season],
            currEp = 1;
        mediaSelItem.classList.add("media-sel-item");
        if (currSeason == 1) {
            mediaSelItem.classList.add("media-sel-item--selected");
        }
        mediaSelItem.addEventListener("click", function(){changeSection(this);}, false);
        mediaSelItemTitle.classList.add("media-sel-item-title");
        mediaSelItemTitle.innerHTML = "Season " + currSeason;
        mediaSelItem.appendChild(mediaSelItemTitle);
        mediaSelCont.appendChild(mediaSelItem);

        seasonCont.classList.add("season-" + currSeason);
        seasonCont.classList.add("episodes-container");
        seasonCont.classList.add("profile-section");
        if (currSeason > 1) {
            seasonCont.classList.add("profile-section--hidden");
            seasonCont.classList.add("profile-section--invis");
        }
        epList.classList.add("list");
        epList.classList.add("episode-list")
        for (ep in episodes) {
            var epItem = document.createElement("li"),
                epItemImg = document.createElement("div"),
                epItemProg = document.createElement("div"),
                epItemNum = document.createElement("div"),
                epItemTitle = document.createElement("div");
            epItem.classList.add("episode-item");
            epItem.classList.add("episode-item--not-added");
            epItemImg.classList.add("episode-item-img");
            // ADD IMG
            if (episodes[ep].img != "") {
                epItemImg.style.backgroundImage = "url(" + episodes[ep].img + ")";
            }
            epItemProg.classList.add("episode-item-progress");
            epItemNum.classList.add("episode-item-number");
            epItemNum.innerHTML = "Episode " + currEp;
            epItemTitle.classList.add("episode-item-title");
            epItemTitle.innerHTML = episodes[ep].title;

            var markBtn = document.createElement("div"),
                markBtnImg = document.createElement("div"),
                markBtnType = document.createElement("p");
            markBtn.classList.add("episode-item-button");
            markBtn.classList.add("episode-item-button--mark-cont");
            markBtn.addEventListener("click", function(){markAsWatched(this, true);}, false);
            markBtnImg.classList.add("episode-item-button--mark");
            markBtnType.innerHTML = "Mark as Watched";
            markBtn.appendChild(markBtnImg);
            markBtn.appendChild(markBtnType);

            var watchBtn = document.createElement("div"),
                watchBtnImg = document.createElement("div"),
                watchBtnType = document.createElement("p");
            watchBtn.classList.add("episode-item-button");
            watchBtn.classList.add("episode-item-button--watch-cont");
            watchBtnImg.classList.add("episode-item-button--watch");
            watchBtnType.innerHTML = "Watch Now";
            watchBtn.appendChild(watchBtnImg);
            watchBtn.appendChild(watchBtnType);

            var unmarkBtn = document.createElement("div"),
                unmarkBtnImg = document.createElement("div"),
                unmarkBtnType = document.createElement("p");
            unmarkBtn.classList.add("episode-item-button");
            unmarkBtn.classList.add("episode-item-button--unmark-cont");
            unmarkBtn.addEventListener("click", function(){markAsWatched(this, false);}, false);
            unmarkBtnImg.classList.add("episode-item-button--unmark");
            unmarkBtnType.innerHTML = "Mark as Unwatched";
            unmarkBtn.appendChild(unmarkBtnImg);
            unmarkBtn.appendChild(unmarkBtnType);

            epItem.appendChild(epItemImg);
            epItem.appendChild(epItemProg);
            epItem.appendChild(epItemNum);
            epItem.appendChild(epItemTitle);
            epItem.appendChild(markBtn);
            epItem.appendChild(watchBtn);
            epItem.appendChild(unmarkBtn);
            epList.appendChild(epItem);

            currEp += 1;
        }
        seasonCont.appendChild(epList);
        seasonsSection.appendChild(seasonCont);
        currSeason += 1;
    }

    /*
    <div class="section" id="seasons">
        ...
        <div class="season-1 episodes-container profile-section profile-section--hidden profile-section--invis">
            <ul class="list episode-list">
                <li class="episode-item episode-item--not-added">
                    <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5112/42/16x9/1200.jpg');"></div>
                    <div class="episode-item-progress"></div>
                    <div class="episode-item-number">Episode 1</div>
                    <div class="episode-item-title">The Crocodile's Dilemma</div>
                    <div class="episode-item-button episode-item-button--mark-cont" onclick="markAsWatched(this, true);">
                        <div class="episode-item-button--mark"></div>
                        <p>Mark as Watched</p>
                    </div>
                    <div class="episode-item-button episode-item-button--watch-cont">
                        <div class="episode-item-button--watch"></div>
                        <p>Watch Now</p>
                    </div>
                    <div class="episode-item-button episode-item-button--unmark-cont" onclick="markAsWatched(this, false);">
                        <div class="episode-item-button--unmark"></div>
                        <p>Mark as Unwatched</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    */
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

function getFriendsWatching() {
    var showName = document.getElementsByClassName('show-header-info-title')[0].innerHTML,
        friendNames,
        friends = [];
    for (user in users) {
        if (user == "josh_jpeg") {
            friendNames = users[user].friends;
        }
    }
    for (name in friendNames) {
        for (user in users) {
            if (friendNames[name] == user) {
                for (show in users[user].shows) {
                    if (show == showName) {
                        var friend = {
                            username: users[user].username,
                            name: users[user].firstname,
                            pic: users[user].picture,
                            progress: users[user].shows[show].progress
                        };
                        friends.push(friend);
                    }
                }
            }
        }
    }
    for (var i = 0; i < friends.length; i++) {
        var lastWatched = 0;
        for (ep in friends[i].progress) {
            if (friends[i].progress[ep] == true) {
                lastWatched = parseInt(ep);
            }
        }
        friends[i]["lastWatched"] = lastWatched;
    }
    friends = sortFriendsList(friends);
    var friendWatchingCont = document.querySelector("#friends-watching");
    if (friends.length == 0) {
        friendWatchingCont.style.display = "none";
    } else {
        var friendsList = document.querySelector(".friends-watching-list");
        friendWatchingCont.style.display = "block";
        for (var i = 0; i < friends.length; i++) {
            var friendItem = document.createElement("li"),
                friendLink = document.createElement("a"),
                friendProgress = document.createElement("div"),
                friendProgressCircle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                friendProgressCircleBG = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                friendProgressCirclePROG = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                friendPic = document.createElement("div"),
                friendName = document.createElement("p"),
                friendEp = document.createElement("p");
            friendItem.classList.add("friends-watching-item");
            // ADDS LINK
            friendLink.href = "/users/" + friends[i].username + ".php";
            friendProgress.classList.add("friend-progress");
            friendProgressCircle.classList.add("friend-progress--circle");
            friendProgressCirclePROG.classList.add("prog");
            friendPic.classList.add("friend-progress--pic");
            friendName.classList.add("friends-watching-item--name");
            friendEp.classList.add("friends-watching-item--ep");

            friendProgressCircle.setAttributeNS(null, "width", "80");
            friendProgressCircle.setAttributeNS(null, "height", "80");
            friendProgressCircle.setAttributeNS(null, "viewBox", "0 0 80 80");
            friendProgressCircle.setAttributeNS(null, "shapeRendering", "auto");
            friendProgressCircleBG.setAttributeNS(null, "cx", "40");
            friendProgressCircleBG.setAttributeNS(null, "cy", "40");
            friendProgressCircleBG.setAttributeNS(null, "r", "36.5");
            friendProgressCircleBG.setAttributeNS(null, "shapeRendering", "auto");
            friendProgressCirclePROG.setAttributeNS(null, "cx", "40");
            friendProgressCirclePROG.setAttributeNS(null, "cy", "40");
            friendProgressCirclePROG.setAttributeNS(null, "r", "36.5");
            friendProgressCirclePROG.setAttributeNS(null, "shapeRendering", "auto");

            var totalEps = 0;
            for (ssn in thisShow.seasons) {
                for (ep in thisShow.seasons[ssn]) {
                    totalEps += 1;
                }
            }

            var radius = 36.5,
                progress = (friends[i].lastWatched / totalEps),
                circumference = Math.PI * (2 * radius),
                strokePercent = circumference - (progress * circumference),
                timeout;
            friendProgressCirclePROG.style.strokeDasharray = circumference + "";
            friendProgressCirclePROG.style.strokeDashoffset = strokePercent + "";

            if (progress == 1) {
                friendProgressCircle.classList.add("friend-progress--circle--finished");
                friendEp.innerHTML = "Finished";
            } else if (progress == 0) {
                friendEp.innerHTML = "Added";
            } else {
                friendEp.innerHTML = getEpisodeID(friends[i].lastWatched);
            }

            friendName.innerHTML = friends[i].name;
            friendPic.style.backgroundImage = "url(" + friends[i].pic + ")";

            friendProgressCircle.appendChild(friendProgressCircleBG);
            friendProgressCircle.appendChild(friendProgressCirclePROG);
            friendProgress.appendChild(friendProgressCircle);
            friendProgress.appendChild(friendPic);
            friendLink.appendChild(friendProgress);
            friendLink.appendChild(friendName);
            friendItem.appendChild(friendLink);
            friendItem.appendChild(friendEp);
            friendsList.appendChild(friendItem);
        }
        /*
        <ul class="list friends-watching-list">
            <li class="friends-watching-item">
                <div class="friend-progress">
                    <svg class="friend-progress--circle friend-progress--circle--finished" width="80" height="80" viewBox="0 0 80 80">
                        <circle cx="40" cy="40" r="36.5"/>
                        <circle class="prog" cx="40" cy="40" r="36.5"/>
                    </svg>
                    <div class="friend-progress--pic" id="tanner"></div>
                </div>
                <p class="friends-watching-item--name">Tanner</p>
                <p class="friends-watching-item--ep">Finished</p>
            </li>
        </ul>
        */
    }
}

function sortFriendsList(friends) {
    var progresses = [],
        newFriends = [];
    for (var i = 0; i < friends.length; i++) {
        progresses.push(friends[i].lastWatched);
    }
    progresses = progresses.sort(function(a, b){return b-a});
    for (var i = 0; i < progresses.length; i++) {
        var index = 0;
        for (var j = 0; j < friends.length; j++) {
            if (friends[j].lastWatched == progresses[i]) {
                index = j;
            }
        }
        newFriends.push(friends[index]);
        friends.splice(index, 1);
    }
    return newFriends;
}

function getEpisodeID(lastWatched) {
    var showName = document.getElementsByClassName('show-header-info-title')[0].innerHTML,
        thisShow;
    for (show in shows) {
        if (show == showName) {
            thisShow = shows[show];
        }
    }
    var index = lastWatched;
    for (season in thisShow.seasons) {
        for (episode in thisShow.seasons[season]) {
            if (index == 1) {
                return season + episode;
            } else {
                index -= 1;
            }
        }
    }
}
