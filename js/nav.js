function openActionsBar(actionElem) {
    "use strict";
    var navSec = document.getElementById('nav-sec'),
        search = document.getElementById('nav-search'),
        notif = document.getElementById('nav-notif'),
        profile = document.getElementById('nav-profile'),
        navSearch = document.getElementById('actions-bar--search'),
        navNotif = document.getElementById('actions-bar--notif'),
        navProfile = document.getElementById('actions-bar--profile');
    if (navSec.classList.contains('nav-open')) {
        if ((search.classList.contains('nav-button--sel') && actionElem === search)
            || (notif.classList.contains('nav-button--sel') && actionElem === notif)
            || (profile.classList.contains('nav-button--sel') && actionElem === profile)) {
            actionElem.classList.remove('nav-button--sel');
            navSec.classList.remove('nav-open');
            navSearch.classList.add('action--hidden');
            navNotif.classList.add('action--hidden');
            navProfile.classList.add('action--hidden');
        } else {
            search.classList.remove('nav-button--sel');
            notif.classList.remove('nav-button--sel');
            profile.classList.remove('nav-button--sel');
            actionElem.classList.add('nav-button--sel');

            navNotif.classList.remove('action--hidden');
            navProfile.classList.remove('action--hidden');
            navSearch.classList.remove('action--hidden');
            if (actionElem === notif){
                navSearch.classList.add('action--hidden');
                navProfile.classList.add('action--hidden');
            } else if (actionElem === profile) {
                navSearch.classList.add('action--hidden');
                navNotif.classList.add('action--hidden');
            } else if (actionElem === search) {
                navProfile.classList.add('action--hidden');
                navNotif.classList.add('action--hidden');
            }
        }
    } else {
        search.classList.remove('nav-button--sel');
        notif.classList.remove('nav-button--sel');
        profile.classList.remove('nav-button--sel');
        actionElem.classList.add('nav-button--sel');

        navSearch.classList.remove('action--hidden');
        navNotif.classList.remove('action--hidden');
        navProfile.classList.remove('action--hidden');
        if (actionElem === notif){
            navSearch.classList.add('action--hidden');
            navProfile.classList.add('action--hidden');
        } else if (actionElem === profile) {
            navSearch.classList.add('action--hidden');
            navNotif.classList.add('action--hidden');
        } else if (actionElem === search) {
            navProfile.classList.add('action--hidden');
            navNotif.classList.add('action--hidden');
        }

        navSec.classList.add('nav-open');
    }
}

function searchBar() {
    var searchbar = document.getElementById('searchbar'),
        searchTop = document.getElementsByClassName('search-top')[0],
        searchBottom = document.getElementsByClassName('search-bottom')[0],
        searchItems = searchBottom.getElementsByClassName('search-item'),
        searchAll;
    for (var i = 0; i < searchItems.length; i++) {
        if (searchItems[i].classList.contains("search-item--searchall")) {
            searchAll = searchItems[i].getElementsByTagName('span')[0];
        }
    }
    if (searchbar.value.length == 0) {
        searchTop.classList.remove('active-search');
        searchBottom.classList.add('search-bottom--no-search');
    } else {
        buildSearchItems(searchbar.value);
        searchTop.classList.add('active-search');
        searchBottom.classList.remove('search-bottom--no-search');
    }
}

function buildSearchItems(query) {
    var results = returnResults(query),
        searchBottom = document.getElementsByClassName('search-bottom')[0],
        currentItems = searchBottom.getElementsByClassName('search-item');
    while (searchBottom.hasChildNodes()) {
        searchBottom.removeChild(searchBottom.lastChild);
    }
    for (result in results) {
        console.log(results[result]);
        var searchItem = document.createElement("a"),
            searchItemImg = document.createElement("div"),
            searchItemTitle = document.createElement("div");
        searchItem.classList.add("search-item");
        searchItemImg.classList.add("search-item--img");
        searchItemTitle.classList.add("search-item--title");
        if (results[result].type == "show") {
            searchItem.classList.add("search-item--show");
        } else if (results[result].type == "movie") {
            searchItem.classList.add("search-item--movie");
        } else {
            searchItem.classList.add("search-item--user");
        }
        searchItemImg.style.backgroundImage = "url('" + results[result].img + "')";
        searchItemTitle.innerHTML = results[result].title;
        searchItem.href = results[result].link;
        searchItem.appendChild(searchItemImg);
        searchItem.appendChild(searchItemTitle);
        searchBottom.appendChild(searchItem);
    }
    var searchAll = document.createElement("a");
    searchAll.classList.add("search-item");
    searchAll.classList.add("search-item--searchall");
    searchAll.innerHTML = "See all results for <span>" + query + "</span>";
    searchBottom.appendChild(searchAll);

    /*
    <li class="search-item search-item--show">
        <div class="search-item--img"></div>
        <div class="search-item--title">Dirk Gently's Holistic Detective Agency</div>
    </li>
    <li class="search-item search-item--movie">
        <div class="search-item--img"></div>
        <div class="search-item--title">Get Out</div>
    </li>
    <li class="search-item search-item--user">
        <div class="search-item--img"></div>
        <div class="search-item--title">Tanner Richardett</div>
    </li>
    <li class="search-item search-item--searchall">See all results for <span>Hello</span></li>
    */
}
