var opponents,
    challenges;

window.addEventListener("load", function() {
    readFile(function(l, u, s, m) {
        opponents = u;
        challenges = s;
        initChallenge();
    });
}, false);

var chosenOpponents = [],
    chosenShow = null;

function startChallenge(open) {
    var challengeModal = document.getElementById('overlay--challenge'),
        primaryBtn = document.getElementsByClassName('overlay-btn--primary')[0],
        body = document.getElementsByTagName('body')[0],
        timeout,
        back = document.getElementsByClassName('overlay-back')[0],
        backText = document.getElementsByClassName('overlay-back-btn-type')[0];
        backText.innerHTML = document.getElementsByClassName('header-info-name')[0].innerHTML,
        pages = document.getElementsByClassName('overlay-content-page');

    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.add("overlay-content-page--hidden");
        if (i == 0) {
            pages[i].classList.remove("overlay-content-page--hidden");
            nextPage(false);
        }
    }

    chosenOpponents = []
    chosenShow = null;

    if (open) {
        challengeModal.classList.remove('overlay--hidden');
        body.style.overflow = "hidden";
        timeout = setTimeout(function () {
            back.classList.remove('overlay-back--hidden');
        }, 600);
        initChallenge();
    } else {
        var searchbars = challengeModal.getElementsByClassName('searchbox--bar');
        for (var i = 0; i < searchbars.length; i++) {
            searchbars[i].value = "";
        }
        challengeModal.classList.add('overlay--hidden');
        body.style.overflow = "auto";
        timeout = setTimeout(function () {
            back.classList.add('overlay-back--hidden');
        }, 600);
    }
}

function nextPage(forward) {
    var backButton = document.getElementsByClassName('overlay-container-back')[0],
        primaryBtn = document.getElementsByClassName('overlay-btn--primary')[0],
        overlay = document.getElementsByClassName('overlay')[0],
        pages = document.getElementsByClassName('overlay-content-page'),
        currentPage,
        pageNum,
        timeout,
        goLeft = false;
    for (var i = 0; i < pages.length; i++) {
        if (!pages[i].classList.contains('overlay-content-page--hidden')) {
            currentPage = pages[i];
        }
    }
    for (var i = 0; i < currentPage.classList.length; i++) {
        if (currentPage.classList[i].indexOf('overlay-content-page--p') > -1) {
            pageNum = parseInt(currentPage.classList[i].split("overlay-content-page--p").pop());
        }
    }
    if (forward) {
        if ((currentPage.id == "challenge-start")
            || (currentPage.id == "challenge-opponents" && chosenOpponents.length > 0)
            || (currentPage.id == "challenge-show" && chosenShow != null)
            || (currentPage.id == "challenge-review")) {
            pageNum += 1;
            goLeft = true;
        }
    } else {
        if (pageNum == pages.length) {
            pageNum = 0;
        } else if (pageNum > 1) {
            pageNum -= 1;
            goLeft = false;
        }
    }
    if (pageNum > 0) {
        var chosenPage = pages[pageNum - 1];
        overlay.scrollTop = 0;
        for (var i = 0; i < pages.length; i++) {
            if (pages[i] !== chosenPage) {
                pages[i].classList.add('overlay-content-page--hidden');
                if (goLeft) {
                    pages[i].classList.add('overlay-content-page--hidden_left');
                } else {
                    pages[i].classList.add('overlay-content-page--hidden_right');
                }

            }
        }
        timeout = setTimeout(function () {
            chosenPage.classList.remove('overlay-content-page--invis');
            for (var i = 0; i < pages.length; i++) {
                if (pages[i] !== chosenPage) {
                    pages[i].classList.add('overlay-content-page--invis');
                    pages[i].classList.remove('overlay-content-page--hidden_left');
                    pages[i].classList.remove('overlay-content-page--hidden_right');
                }
            }
            timeout = setTimeout(function () {
                chosenPage.classList.remove('overlay-content-page--hidden');
            }, 25);
        }, 250);
    }


    if (pageNum > 1 && pageNum < pages.length) {
        backButton.classList.remove('overlay-container-back--hidden');
        overlay.classList.add('overlay--process');
        updateReviewPage();
    } else {
        backButton.classList.add('overlay-container-back--hidden');
        primaryBtn.classList.remove('overlay-btn--primary--disabled');
        if (pageNum == pages.length) {
            overlay.classList.remove('overlay--process');
            overlay.classList.add('overlay--end');
        } else {
            overlay.classList.remove('overlay--process');
            overlay.classList.remove('overlay--end');
        }
    }
}


function searchChallenge(query) {
    if (!document.querySelector("#challenge-opponents").classList.contains("overlay-content-page--hidden")) {
        var opponentPage = document.getElementById('challenge-opponents'),
            searchboxList = opponentPage.querySelector('.searchbox-list');
        while (searchboxList.hasChildNodes()) {
            searchboxList.removeChild(searchboxList.lastChild);
        }
        buildOppList(searchboxList, getOpponents(query));
    } else if (!document.querySelector("#challenge-show").classList.contains("overlay-content-page--hidden")) {
        var challengePage = document.getElementById('challenge-show'),
            searchboxList = challengePage.querySelector('.searchbox-list');
        while (searchboxList.hasChildNodes()) {
            searchboxList.removeChild(searchboxList.lastChild);
        }
        buildChallengeList(searchboxList, getChallenges(query));
    }
}

function initChallenge() {
    var opponentPage = document.getElementById('challenge-opponents'),
        challengePage = document.getElementById('challenge-show'),
        reviewPage = document.getElementById('challenge-review'),
        you = window.location.href.split("/users/")[1].split(".php")[0];
    for (user in opponents) {
        if (opponents[user].username == you) {
            chosenOpponents.push(opponentConstructor(opponents[user].picture, opponents[user].username,
                opponents[user].firstname + " " + opponents[user].lastname, opponents[user].challenges.win));
        }
    }
    initOpponentPage(opponentPage);
    initChallengePage(challengePage);
}

function opponentConstructor(cover, username, name, wins) {
    return opponent = {
        "cover": cover,
        "username": username,
        "name": name,
        "wins": wins
    };
}

function initOpponentPage(page) {
    var searchboxBottom = page.getElementsByClassName('searchbox--bottom')[0],
        searchboxList = page.getElementsByClassName("searchbox-list")[0];
    searchboxBottom.scrollTop = 0;
    while (searchboxList.hasChildNodes()) {
        searchboxList.removeChild(searchboxList.lastChild);
    }
    buildOppList(searchboxList, getOpponents(""));
    searchboxBottom.appendChild(searchboxList);
    updateOpponents();
}

function buildOppList(list, ops) {
    for (var i = 0; i < ops.length; i++) {
        var searchboxItem = document.createElement("li"),
            searchboxItemCover = document.createElement("div"),
            searchboxItemTitle = document.createElement("div"),
            searchboxItemCaption = document.createElement("div"),
            searchboxItemButton = document.createElement("div");
        searchboxItem.classList.add("searchbox-item");
        searchboxItem.classList.add("searchbox-item--user");
        searchboxItemCover.classList.add("searchbox-item--cover");
        searchboxItemCover.style.backgroundImage = "url(" + ops[i].cover + ")";
        searchboxItemTitle.classList.add("searchbox-item--title");
        searchboxItemTitle.innerHTML = ops[i].name;
        searchboxItemCaption.classList.add("searchbox-item--caption");
        searchboxItemCaption.innerHTML = ops[i].wins + "x Winner";
        searchboxItemButton.classList.add("searchbox-item--button");
        searchboxItemButton.addEventListener("click", function(){addOpponent(this);}, false);

        searchboxItem.appendChild(searchboxItemCover);
        searchboxItem.appendChild(searchboxItemTitle);
        searchboxItem.appendChild(searchboxItemCaption);
        searchboxItem.appendChild(searchboxItemButton);
        for (var j = 0; j < chosenOpponents.length; j++) {
            if (chosenOpponents[j].name == ops[i].name) {
                searchboxItem.classList.add('searchbox-item--added');
                searchboxItem.classList.remove('searchbox-item--disabled');
            } else {
                if (chosenOpponents.length == 3) {
                    searchboxItem.classList.remove('searchbox-item--added');
                    searchboxItem.classList.add('searchbox-item--disabled');
                }
            }
        }
        list.appendChild(searchboxItem);

        /*
        <li class="searchbox-item searchbox-item--user">
            <div class="searchbox-item--cover"></div>
            <div class="searchbox-item--title">Jess Cooney</div>
            <div class="searchbox-item--caption">3x Champion</div>
            <div class="searchbox-item--button"></div>
        </li>
        */
    }
}

function getOpponents(query) {
    var result = [];
    for (op in opponents) {
        if (opponents[op].username != "josh_jpeg") {
            var username = opponents[op].username,
                name = opponents[op].firstname + " " + opponents[op].lastname;
            if (query == undefined || query == "" || query.replace(/\s+/g, '') == ""
            || username.toLowerCase().indexOf(query.toLowerCase()) !== -1
            || name.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                result.push(opponentConstructor(opponents[op].picture, username, name, opponents[op].challenges.win));
            }
        }
    }
    return result;
}

function addOpponent(opp) {
    var opponentPage = document.getElementById('challenge-opponents'),
        searchboxItems = opponentPage.getElementsByClassName('searchbox-item'),
        chosenItem;
    for (var i = 0; i < searchboxItems.length; i++) {
        var thisBtn = searchboxItems[i].querySelector(".searchbox-item--button");
        if (thisBtn === opp) {
            chosenItem = searchboxItems[i];
        }
    }
    if (chosenItem.classList.contains('searchbox-item--disabled')) {
        // don't do anything
    } else if (chosenItem.classList.contains('searchbox-item--added')) {
        var name = chosenItem.querySelector(".searchbox-item--title").innerHTML;
        for (var i = 0; i < chosenOpponents.length; i++) {
            if (chosenOpponents[i].name === name) {
                chosenOpponents.splice(i, 1);
            }
        }
        chosenItem.classList.remove('searchbox-item--added');
        updateOpponents();
    } else {
        if (chosenOpponents.length < 3) {
            var cover = chosenItem.querySelector(".searchbox-item--cover"),
                url = cover.style.backgroundImage + "";
            url = url.split("url(")[1].split("\"");
            if (url.length > 0) {
                url = url[0] + url[1];
            }
            url = url.split(")")[0];

            // NEED TO GET USERNAME SOMEHOW
            var newOp = opponentConstructor(url, "", chosenItem.querySelector(".searchbox-item--title").innerHTML,
                chosenItem.querySelector(".searchbox-item--caption").innerHTML.split("x Winner")[0]);
            var add = true;
            for (op in chosenOpponents) {
                if (add && chosenOpponents[op].name == newOp.name) {
                    add = false;
                }
            }
            if (add) {
                chosenOpponents.push(newOp);
                chosenItem.classList.add("searchbox-item--added");
            }
        }
        updateOpponents();
    }
}

function updateOpponents() {
    var opponentPage = document.getElementById('challenge-opponents'),
        nextBtn = opponentPage.querySelector(".overlay-btn--primary"),
        searchboxItems = opponentPage.getElementsByClassName('searchbox-item'),
        oppList = opponentPage.getElementsByClassName('opponent-item');
    if (chosenOpponents.length > 0) {
        nextBtn.classList.remove("overlay-btn--primary--disabled");
        nextBtn.innerHTML = "Choose the Challenge";
    } else {
        nextBtn.classList.add("overlay-btn--primary--disabled");
        nextBtn.innerHTML = "Choose at least one opponent";
    }
    for (var i = 0; i < searchboxItems.length; i++) {
        if (chosenOpponents.length == 3 && !searchboxItems[i].classList.contains('searchbox-item--added')) {
            searchboxItems[i].classList.add('searchbox-item--disabled');
        } else if (chosenOpponents.length < 3 && searchboxItems[i].classList.contains('searchbox-item--disabled')) {
            searchboxItems[i].classList.remove('searchbox-item--disabled');
        }
    }
    for (var i = 0; i < oppList.length; i++) {
        if (i < chosenOpponents.length) {
            oppList[i].style.backgroundImage = "url('" + chosenOpponents[i].cover + "')";
            oppList[i].classList.remove("opponent-item--disabled");
        } else {
            oppList[i].style.backgroundImage = "url('/img/defaults/add.png')";
            oppList[i].classList.add("opponent-item--disabled");
        }
    }
}

function initChallengePage(page) {
    var searchboxBottom = page.getElementsByClassName('searchbox--bottom')[0],
        searchboxList = searchboxBottom.querySelector(".searchbox-list");
    while (searchboxList.hasChildNodes()) {
        searchboxList.removeChild(searchboxList.lastChild);
    }
    buildChallengeList(searchboxList, getChallenges(""));
    searchboxBottom.appendChild(searchboxList);
    updateShows();
}

function challengeConstructor(cover, title, seasons) {
    return challenge = {
        "cover": cover,
        "title": title,
        "seasons": seasons
    }
}

function getChallenges(query) {
    var result = [];
    for (show in challenges) {
        var seasons = 0;
        for (season in challenges[show].seasons) {
            seasons += 1;
        }
        if (query != undefined && query != "" && query.replace(/\s+/g, '') != ""
        && show.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
            result.push(challengeConstructor(challenges[show].cover, show, seasons));
        }
    }
    return result;
}

function buildChallengeList(list, shows) {
    if (chosenShow != null) {
        var searchboxItem = document.createElement("li"),
            searchboxItemCover = document.createElement("div"),
            searchboxItemTitle = document.createElement("div"),
            searchboxItemCaption = document.createElement("div"),
            searchboxItemButton = document.createElement("div");
        searchboxItem.classList.add("searchbox-item");
        searchboxItem.classList.add("searchbox-item--show");
        searchboxItemCover.classList.add("searchbox-item--cover");
        searchboxItemCover.style.backgroundImage = "url('" + chosenShow.cover + "')";
        searchboxItemTitle.classList.add("searchbox-item--title");
        searchboxItemTitle.innerHTML = chosenShow.title;
        searchboxItemCaption.classList.add("searchbox-item--caption");
        searchboxItemCaption.innerHTML = chosenShow.seasons + " Seasons";
        searchboxItemButton.classList.add("searchbox-item--button");
        searchboxItemButton.addEventListener("click", function(){addChallenge(this);}, false);

        searchboxItem.appendChild(searchboxItemCover);
        searchboxItem.appendChild(searchboxItemTitle);
        searchboxItem.appendChild(searchboxItemCaption);
        searchboxItem.appendChild(searchboxItemButton);
        searchboxItem.classList.add('searchbox-item--added');

        list.appendChild(searchboxItem);
    } else if (shows.length == 0 && !list.hasChildNodes()) {
        var searchboxCaption = document.createElement("div");
        searchboxCaption.classList.add("searchbox-caption");
        searchboxCaption.innerHTML = "Search for a show to binge with your opponents.";
        list.appendChild(searchboxCaption);
        /* <div class="searchbox-caption">Search for a show to binge with your opponents.</div> */
    }
    for (var i = 0; i < shows.length; i++) {
        if (chosenShow == null || shows[i].title != chosenShow.title) {
            var searchboxItem = document.createElement("li"),
                searchboxItemCover = document.createElement("div"),
                searchboxItemTitle = document.createElement("div"),
                searchboxItemCaption = document.createElement("div"),
                searchboxItemButton = document.createElement("div");
            searchboxItem.classList.add("searchbox-item");
            searchboxItem.classList.add("searchbox-item--show");
            searchboxItemCover.classList.add("searchbox-item--cover");
            searchboxItemCover.style.backgroundImage = "url('" + shows[i].cover + "')";
            searchboxItemTitle.classList.add("searchbox-item--title");
            searchboxItemTitle.innerHTML = shows[i].title;
            searchboxItemCaption.classList.add("searchbox-item--caption");
            searchboxItemCaption.innerHTML = shows[i].seasons + " Seasons";
            searchboxItemButton.classList.add("searchbox-item--button");
            searchboxItemButton.addEventListener("click", function(){addChallenge(this);}, false);

            searchboxItem.appendChild(searchboxItemCover);
            searchboxItem.appendChild(searchboxItemTitle);
            searchboxItem.appendChild(searchboxItemCaption);
            searchboxItem.appendChild(searchboxItemButton);

            if (chosenShow != null) {
                if (chosenShow.title == shows[i].title) {
                    searchboxItem.classList.add('searchbox-item--added');
                    searchboxItem.classList.remove('searchbox-item--disabled');
                } else {
                    searchboxItem.classList.remove('searchbox-item--added');
                    searchboxItem.classList.add('searchbox-item--disabled');
                }
            }
            list.appendChild(searchboxItem);
        }
        /*
        <li class="searchbox-item searchbox-item--show">
            <div class="searchbox-item--cover"></div>
            <div class="searchbox-item--title">Dirk Gently's Holistic Detective Agency</div>
            <div class="searchbox-item--caption">1 Season</div>
            <div class="searchbox-item--button"></div>
        </li>
        */
    }
}

function addChallenge(btn) {
    var challengePage = document.getElementById('challenge-show'),
        searchboxItems = challengePage.getElementsByClassName('searchbox-item'),
        chosenItem;
    for (var i = 0; i < searchboxItems.length; i++) {
        var thisBtn = searchboxItems[i].querySelector(".searchbox-item--button");
        if (thisBtn === btn) {
            chosenItem = searchboxItems[i];
        }
    }
    if (chosenItem.classList.contains('searchbox-item--disabled')) {
        // don't do anything
    } else if (chosenItem.classList.contains('searchbox-item--added')) {
        chosenShow = null;
        chosenItem.classList.remove('searchbox-item--added');
        updateShows();
    } else {
        if (chosenShow == null) {
            var cover = chosenItem.querySelector(".searchbox-item--cover"),
                url = cover.style.backgroundImage + " ";
            url = url.split("url(")[1].split("\"");
            if (url.length > 0) {
                url = url[0] + url[1];
            }
            url = url.split(")")[0];
            chosenShow = challengeConstructor(url, chosenItem.querySelector(".searchbox-item--title").innerHTML,
                chosenItem.querySelector(".searchbox-item--caption").innerHTML.split(" Seasons")[0]);
            chosenItem.classList.add("searchbox-item--added");
        }
        updateShows();
    }
}

function updateShows() {
    var challengePage = document.getElementById('challenge-show'),
        nextBtn = challengePage.querySelector(".overlay-btn--primary"),
        searchboxItems = challengePage.getElementsByClassName('searchbox-item');
    if (chosenShow != null) {
        nextBtn.classList.remove("overlay-btn--primary--disabled");
        nextBtn.innerHTML = "Review your Challenge";
    } else {
        nextBtn.classList.add("overlay-btn--primary--disabled");
        nextBtn.innerHTML = "Choose a show to watch";
    }
    for (var i = 0; i < searchboxItems.length; i++) {
        if (chosenShow != null && !searchboxItems[i].classList.contains('searchbox-item--added')) {
            searchboxItems[i].classList.add('searchbox-item--disabled');
        } else if (chosenShow == null && searchboxItems[i].classList.contains('searchbox-item--disabled')) {
            searchboxItems[i].classList.remove('searchbox-item--disabled');
        }
    }
}

function updateReviewPage() {
    var reviewPage = document.querySelector("#challenge-review"),
        oppList = reviewPage.getElementsByClassName('challenge-review-list')[0],
        showList = reviewPage.getElementsByClassName('challenge-review-list')[1];
    while (oppList.hasChildNodes()) {
        oppList.removeChild(oppList.lastChild);
    }
    while (showList.hasChildNodes()) {
        showList.removeChild(showList.lastChild);
    }
    buildReviewLists(oppList, showList);
}

function buildReviewLists(oppList, showList) {
    var oppHeader = document.createElement("div"),
        showHeader = document.createElement("div");
    oppHeader.classList.add("challenge-review-header");
    oppHeader.innerHTML = "Your Opponents";
    oppList.appendChild(oppHeader);
    for (opp in chosenOpponents) {
        var reviewItem = document.createElement("li"),
            reviewItemCover = document.createElement("div"),
            reviewItemTitle = document.createElement("div"),
            reviewItemCaption = document.createElement("div");
        reviewItem.classList.add("challenge-review-item");
        reviewItem.classList.add("challenge-review-item--user");
        reviewItemCover.classList.add("challenge-review-item--cover");
        reviewItemCover.style.backgroundImage = "url('" + chosenOpponents[opp].cover + "')";
        reviewItemTitle.classList.add("challenge-review-item--title");
        reviewItemTitle.innerHTML = chosenOpponents[opp].name;
        reviewItemCaption.classList.add("challenge-review-item--caption");
        reviewItemCaption.innerHTML = chosenOpponents[opp].wins + "x Winner";

        reviewItem.appendChild(reviewItemCover);
        reviewItem.appendChild(reviewItemTitle);
        reviewItem.appendChild(reviewItemCaption);
        oppList.appendChild(reviewItem);
    }

    showHeader.classList.add("challenge-review-header");
    showHeader.innerHTML = "The Challenge";
    showList.appendChild(showHeader);
    if (chosenShow != null) {
        var reviewItem = document.createElement("li"),
            reviewItemCover = document.createElement("div"),
            reviewItemTitle = document.createElement("div"),
            reviewItemCaption = document.createElement("div");
        reviewItem.classList.add("challenge-review-item");
        reviewItem.classList.add("challenge-review-item--show");
        reviewItemCover.classList.add("challenge-review-item--cover");
        reviewItemCover.style.backgroundImage = "url('" + chosenShow.cover + "')";
        reviewItemTitle.classList.add("challenge-review-item--title");
        reviewItemTitle.innerHTML = chosenShow.title;
        reviewItemCaption.classList.add("challenge-review-item--caption");
        reviewItemCaption.innerHTML = chosenShow.seasons + " Seasons";

        reviewItem.appendChild(reviewItemCover);
        reviewItem.appendChild(reviewItemTitle);
        reviewItem.appendChild(reviewItemCaption);
        showList.appendChild(reviewItem);
    }

    /*
    <ul class="challenge-review-list">
        <div class="challenge-review-header">The Challenge</div>
        <li class="challenge-review-item challenge-review-item--show">
            <div class="challenge-review-item--cover"></div>
            <div class="challenge-review-item--title">Dirk Gently's Holistic Detective Agency</div>
            <div class="challenge-review-item--caption">1 Season</div>
        </li>
    </ul>
    */
}
