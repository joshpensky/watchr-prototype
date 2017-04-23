var users;
var shows;
var thisUser;
var you;

window.addEventListener("load", function() {
    readFile(function(u, s) {
        users = u;
        shows = s;
        initProfile();
    });
}, false);

// getUser : String --> User
// returns the User from the list of Users who has the given username
function getUser(username) {
    for (user in users) {
        if (users[user].username == username) {
            return users[user];
        }
    }
}

function initProfile() {
    var username = window.location.href.split("/users/")[1].split(".php")[0];
    for (user in users) {
        if (users[user].username == username) {
            thisUser = users[user];
        }
        if (users[user].username == "josh_jpeg") {
            you = users[user];
        }
    }
    document.title = thisUser.firstname + " " + thisUser.lastname + " - watchr";
    var hero = document.getElementsByClassName('hero')[0],
        name = document.getElementsByClassName('header-info-name')[0],
        profPic = document.getElementsByClassName('profile-header-img')[0],
        bio = document.getElementsByClassName('header-desc')[0],
        rank = document.getElementsByClassName('header-info-rank-type')[0],
        expShowY = document.getElementsByClassName('experience-show--years')[0],
        expShowM = document.getElementsByClassName('experience-show--months')[0],
        expShowD = document.getElementsByClassName('experience-show--days')[0],
        expShowH = document.getElementsByClassName('experience-show--hours')[0],
        expMovieY = document.getElementsByClassName('experience-movie--years')[0],
        expMovieM = document.getElementsByClassName('experience-movie--months')[0],
        expMovieD = document.getElementsByClassName('experience-movie--days')[0],
        expMovieH = document.getElementsByClassName('experience-movie--hours')[0],
        genreList = document.getElementsByClassName('genre-list')[0];
    //hero
    if (thisUser.hero != "") {
        hero.style.backgroundImage = "url(" + thisUser.hero + ")";
    }
    //name
    name.innerHTML = thisUser.firstname + " " + thisUser.lastname;
    //profile pic
    if (thisUser.picture != "") {
        profPic.style.backgroundImage = "url(" + thisUser.picture + ")";
    }
    // friend actions
    buildActions();
    // bio
    bio.innerHTML = thisUser.bio;
    // ranks
    rank.innerHTML = thisUser.rank.name;
    // show experience
    expShowY.innerHTML = thisUser.rank.shows.years + " <span>years</span>";
    if (expShowY.innerHTML == "0 <span>years</span>" || expShowY.innerHTML == "NaN <span>years</span>") {
        expShowY.classList.add('experience-show--hidden');
    }
    expShowM.innerHTML = thisUser.rank.shows.months + " <span>months</span>";
    if (expShowM.innerHTML == "0 <span>months</span>" || expShowM.innerHTML == "NaN <span>months</span>") {
        expShowM.classList.add('experience-show--hidden');
    }
    expShowD.innerHTML = thisUser.rank.shows.days + " <span>days</span>";
    if (expShowD.innerHTML == "0 <span>days</span>" || expShowD.innerHTML == "NaN <span>days</span>") {
        expShowD.classList.add('experience-show--hidden');
    }
    expShowH.innerHTML = thisUser.rank.shows.hours + " <span>hours</span>";
    if (expShowH.innerHTML == "0 <span>hours</span>" || expShowH.innerHTML == "NaN <span>hours</span>") {
        expShowH.classList.add('experience-show--hidden');
    }
    // movie experience
    expMovieY.innerHTML = thisUser.rank.movies.years + " <span>years</span>";
    if (expMovieY.innerHTML == "0 <span>years</span>" || expMovieY.innerHTML == "NaN <span>years</span>") {
        expMovieY.classList.add('experience-movie--hidden');
    }
    expMovieM.innerHTML = thisUser.rank.movies.months + " <span>months</span>";
    if (expMovieM.innerHTML == "0 <span>months</span>" || expMovieM.innerHTML == "NaN <span>months</span>") {
        expMovieM.classList.add('experience-movie--hidden');
    }
    expMovieD.innerHTML = thisUser.rank.movies.days + " <span>days</span>";
    if (expMovieD.innerHTML == "0 <span>days</span>" || expMovieD.innerHTML == "NaN <span>days</span>") {
        expMovieD.classList.add('experience-movie--hidden');
    }
    expMovieH.innerHTML = thisUser.rank.movies.hours + " <span>hours</span>";
    if (expMovieH.innerHTML == "0 <span>hours</span>" || expMovieH.innerHTML == "NaN <span>hours</span>") {
        expMovieH.classList.add('experience-movie--hidden');
    }

    var genres = thisUser.genres.loved;
    for (genre in genres) {
        var url = genres[genre].toLowerCase().split(" ")
            finalUrl = "";
        for (var i = 0; i < url.length; i++) {
            finalUrl += url[i];
        }
        url = finalUrl.split("-");
        finalUrl = "";
        for (var i = 0; i < url.length; i++) {
            finalUrl += url[i];
        }
        var genreItem = document.createElement("li"),
            genreItemImg = document.createElement("div"),
            genreItemType = document.createElement("div");
        genreItem.classList.add("genre-item");
        genreItemImg.classList.add("genre-item-img");
        genreItemImg.style.backgroundImage = "url('/img/genres/" + finalUrl + "-big.png')";
        genreItemType.classList.add("genre-item-type");
        genreItemType.innerHTML = genres[genre];
        genreItem.appendChild(genreItemImg);
        genreItem.appendChild(genreItemType);
        genreList.appendChild(genreItem);

        /*
        <li class="genre-item">
            <div class="genre-item-img" style="background-image: url('/img/genres/fantasy-big.png');"></div>
            <div class="genre-item-type">Fantasy</div>
        </li>
        */
    }

    buildFriends();

    var showCont = document.getElementsByClassName('shows profile-section')[0],
        favShows = showCont.getElementsByClassName('section favorites')[0],
        favShowsCont = favShows.getElementsByClassName('show-list')[0],
        allShows = showCont.getElementsByClassName('section all')[0],
        allShowsCont = allShows.getElementsByClassName('show-list')[0],
        showFavs = getFavShows(),
        showAll = getAllShows(showFavs);

    if (showAll.length == 0 && showFavs.length == 0) {
        var empty;
        if (thisUser == you) {
            empty = buildEmpty("You haven't added any shows to your Watchlist.", "We've picked out some you might like");
        } else {
            empty = buildEmpty(thisUser.firstname + " hasn't added any shows yet.", "Recommend some they might like");
        }
        allShows.appendChild(empty);
    } else {
        var empty = allShows.getElementsByClassName('empty')[0];
        if (empty != undefined) {
            empty.remove();
        }
        buildShows(allShowsCont, showAll);
        var showCt = allShows.getElementsByClassName('section-header-type--sub')[0];
        showCt.innerHTML = "(<span>" + showAll.length + "</span>)";
        if (showFavs.length == 0) {
            if (thisUser == you) {
                empty = buildEmpty("You haven't saved any favorite shows yet.", "Let your friends know what you love");
            } else {
                empty = buildEmpty(thisUser.firstname + " hasn't saved any favorite shows yet.", "");
            }
            favShows.appendChild(empty);
        } else {
            empty = favShows.getElementsByClassName('empty')[0];
            if (empty != undefined) {
                empty.remove();
            }
            buildShows(favShowsCont, showFavs);
        }
    }

    var movieCont = document.getElementsByClassName('movies profile-section')[0],
        favMovies = movieCont.getElementsByClassName('section favorites')[0],
        favMoviesCont = favMovies.getElementsByClassName('movie-list')[0],
        allMovies = movieCont.getElementsByClassName('section all')[0],
        allMoviesCont = allMovies.getElementsByClassName('movie-list')[0];
    if (thisUser == you) {
        allMovies.appendChild(buildEmpty("You haven't added any movies to your Watchlist.", "We've picked out some you might like"));
    } else {
        allMovies.appendChild(buildEmpty(thisUser.firstname + " hasn't add any movies yet.", "Recommend some they might like"));
    }
}

function buildActions() {
    var profileActionsList = document.getElementsByClassName('profile-actions-list')[0];
    if (thisUser == you) {
        var settingsAction = document.createElement("li"),
            editProfileAction = document.createElement("li");
        settingsAction.classList.add("profile-actions-item");
        settingsAction.classList.add("profile-actions-item--settings");
        settingsAction.classList.add("profile-actions-item--icononly");
        settingsAction.innerHTML = "Settings";
        editProfileAction.classList.add("profile-actions-item");
        editProfileAction.classList.add("profile-actions-item--settings");
        editProfileAction.classList.add("profile-actions-item--textonly");
        editProfileAction.innerHTML = "Edit Profile";
        profileActionsList.appendChild(settingsAction);
        profileActionsList.appendChild(editProfileAction);
    } else {
        var isFriend = false;
        for (friend in you.friends) {
            if (!isFriend && thisUser.username == you.friends[friend]) {
                isFriend = true;
            }
        }
        if (isFriend) {
            var challengeAction = document.createElement("li"),
                recommendAction = document.createElement("li"),
                friendsAction = document.createElement("li");
            challengeAction.classList.add("profile-actions-item");
            challengeAction.classList.add("profile-actions-item--challenge");
            challengeAction.classList.add("profile-actions-item--icononly");
            challengeAction.innerHTML = "Challenge";
            challengeAction.addEventListener("click", function() {startChallenge(true);}, false);
            recommendAction.classList.add("profile-actions-item");
            recommendAction.classList.add("profile-actions-item--recommend");
            recommendAction.classList.add("profile-actions-item--icononly");
            recommendAction.innerHTML = "Recommend";
            friendsAction.classList.add("profile-actions-item");
            friendsAction.classList.add("profile-actions-item--friends");
            friendsAction.innerHTML = "Friends";
            friendsAction.addEventListener("click", function(){remModal(true, 'modal-remove--friend', thisUser.firstname);}, false);
            profileActionsList.appendChild(challengeAction);
            profileActionsList.appendChild(recommendAction);
            profileActionsList.appendChild(friendsAction);
        } else {
            var addFriendAction = document.createElement("li");
            addFriendAction.classList.add("profile-actions-item");
            addFriendAction.classList.add("profile-actions-item--addfriend");
            addFriendAction.innerHTML = "Add Friend";
            profileActionsList.appendChild(addFriendAction);
        }
    }
    /*
    <li class="profile-actions-item profile-actions-item--challenge profile-actions-item--icononly">Challenge</li>
    <li class="profile-actions-item profile-actions-item--recommend profile-actions-item--icononly">Recommend</li>
    <li class="profile-actions-item profile-actions-item--friends" onclick="remModal(true, 'modal-remove--friend', 'Mike');">Friends</li>
    <li class="profile-actions-item profile-actions-item--addfriend">Add Friend</li>
    <li class="profile-actions-item profile-actions-item--settings profile-actions-item--icononly">Settings</li>
    <li class="profile-actions-item profile-actions-item--settings profile-actions-item--textonly">Edit Profile</li>
    */
}

function buildEmpty(caption, action) {
    var empty = document.createElement("div"),
        emptyImage = document.createElement("div"),
        emptyCaption = document.createElement("div"),
        emptyAction = document.createElement("div"),
        emptyActionCaption = document.createElement("div"),
        emptyActionArrow = document.createElement("div");
    empty.classList.add("empty");
    emptyImage.classList.add("empty--image");
    emptyCaption.classList.add("empty--caption");
    emptyCaption.innerHTML = caption;
    emptyAction.classList.add("empty--action");
    emptyActionCaption.classList.add("empty--action--caption");
    emptyActionCaption.innerHTML = action;
    emptyActionArrow.classList.add("empty--action--arrow");

    emptyAction.appendChild(emptyActionCaption);
    emptyAction.appendChild(emptyActionArrow);
    empty.appendChild(emptyImage);
    empty.appendChild(emptyCaption);
    if (action != "") {
        empty.appendChild(emptyAction);
    }

    return empty;
    /*
    <div class="empty">
        <div class="empty--image"></div>
        <div class="empty--caption">You haven't added any movies to your Watchlist.</div>
        <div class="empty--action">
            <div class="empty--action--caption">We've picked out some you might like</div>
            <div class="empty--action--arrow"></div>
        </div>
    </div>
    */
}

// buildFriends : Array[Element] x Element --> void
// builds the friends section in about
function buildFriends() {
    var friendsList,
        commonFriends = [];
    if (thisUser == you) {
        var friends = [];
        for (friend in you.friends) {
            friends.push(you.friends[friend]);
        }
        friendsList = createFriendList(friends, friends);
        commonFriends = friendsList;
    } else {
        var theirFriends = thisUser.friends,
            theirFriendsArr = [],
            yourFriends = you.friends,
            friends = false;
        for (friend in theirFriends) {
            theirFriendsArr.push(theirFriends[friend]);
        }
        for (friend in yourFriends) {
            if (arrContains(theirFriendsArr, yourFriends[friend])) {
                commonFriends.push(yourFriends[friend]);
            }
        }
        if (arrContains(theirFriendsArr, you.username)) {
            friends = true;
        }
        friendsList = createFriendList(theirFriendsArr, commonFriends);
    }

    var friends = document.getElementsByClassName('section friends')[0],
        friendCt = friends.getElementsByClassName('section-header-type--sub')[0],
        friendContainer = friends.getElementsByClassName('friend-list')[0]
        empty = buildEmpty("You haven't added any friends yet.", "Find people you may know here");

    if (friendsList.length == 0) {
        friends.appendChild(empty);
    } else {
        var emptyElem = friends.getElementsByClassName('empty')[0];
        if (emptyElem != undefined) {
            emptyElem.remove();
        }
        friendCt.innerHTML = "(<span>" + friendsList.length + "</span>)";
        for (friend in friendsList) {
            var friendItem = document.createElement("li");
            friendItem.classList.add("friend-item");

            var friendItemImg = document.createElement("a");
            friendItemImg.classList.add('friend-item-img');
            friendItemImg.style.backgroundImage = "url(" + friendsList[friend].picture + ")";
            // ADDS LINK
            friendItemImg.href = "/users/" + friendsList[friend].username + ".php";

            var friendItemInfo = document.createElement("div"),
                friendItemInfoName = document.createElement("a"),
                friendItemInfoRank = document.createElement("p");
            friendItemInfo.classList.add('friend-item-info');
            friendItemInfoName.classList.add('friend-item-info-name');
            friendItemInfoRank.classList.add('friend-item-info-rank');
            friendItemInfoName.innerHTML = friendsList[friend].firstname + "</br>" + friendsList[friend].lastname;
            // ADDS LINK
            friendItemInfoName.href = "/users/" + friendsList[friend].username + ".php";
            friendItemInfoRank.innerHTML = friendsList[friend].rank.name;
            friendItemInfo.appendChild(friendItemInfoName);
            friendItemInfo.appendChild(friendItemInfoRank);

            var friendItemBtn = document.createElement("div"),
                friendItemBtnCont = document.createElement("div"),
                friendItemBtnImg = document.createElement("div"),
                friendItemBtnText = document.createElement("div");
            friendItemBtn.classList.add("friend-item-btn");
            friendItemBtnImg.classList.add("friend-item-btn--img");
            friendItemBtnText.classList.add("friend-item-btn--text");
            if (friendsList[friend] === you) {
                friendItemBtn.classList.add("friend-item-btn--you");
                friendItemBtnCont.classList.add("friend-item-btn--you-cont");
                friendItemBtnText.innerHTML = "You";
            } else if (arrContains(commonFriends, friendsList[friend].username) || thisUser == you) {
                friendItemBtn.classList.add("friend-item-btn--friends");
                friendItemBtnCont.classList.add("friend-item-btn--friends-cont");
                friendItemBtnText.innerHTML = "Friends";
            } else {
                friendItemBtn.classList.add("friend-item-btn--addfriend");
                friendItemBtnCont.classList.add("friend-item-btn--addfriend-cont");
                friendItemBtnText.innerHTML = "Add Friend";
            }
            friendItemBtnCont.appendChild(friendItemBtnImg);
            friendItemBtnCont.appendChild(friendItemBtnText);
            friendItemBtn.appendChild(friendItemBtnCont);

            friendItem.appendChild(friendItemImg);
            friendItem.appendChild(friendItemInfo);
            friendItem.appendChild(friendItemBtn);
            friendContainer.appendChild(friendItem);
        }

        for (var i = 0; i < friendsList.length; i++) {
            var item = friendContainer.getElementsByClassName('friend-item')[i];
            buildFriendsHelp(item);
        }
    }
}

function buildFriendsHelp(item) {
    var friendsCont = item.getElementsByClassName('friend-item-btn--friends-cont')[0],
        name = item.getElementsByClassName('friend-item-info-name')[0].innerHTML.split("<br>"),
        firstname = name[0];
    if (friendsCont != undefined) {
        friendsCont.addEventListener("click", function(){remModal(true, 'modal-remove--friend', firstname);}, false);
    }
}

// getFavShows: --> Array[Show]
// returns the user's favorite shows
function getFavShows() {
    var favorites = thisUser.favorites.shows,
        favoritesArray = [],
        theirShows = thisUser.shows,
        final = [];
    for (show in favorites) {
        favoritesArray.push(favorites[show]);
    }
    for (show in theirShows) {
        if (arrContains(favoritesArray, show)) {
            var newShow = {};
            newShow[show] = theirShows[show];
            final.push(newShow);
        }
    }
    return final;
}

// getAllShows: Array[Show] --> Array[Show]
// returns all of this user's shows, minus the favorites
function getAllShows(favorites) {
    var theirShows = thisUser.shows,
        all = [],
        final = [];

    for (show in theirShows) {
        all.push(show);
    }

    var favShows = [];
    for (var i = 0; i < favorites.length; i++) {
        favShows.push(Object.keys(favorites[i])[0]);
    }

    for (var i = 0; i < all.length; i++) {
        //if (!arrContains(favShows, all[i])) {
            var newShow = {};
            newShow[all[i]] = theirShows[all[i]];
            final.push(newShow);
        //}
    }
    return final;
}

function buildShows(showListContainer, final) {
    var yourShows = you.shows;
    for (show in final) {
        var showName = Object.keys(final[show])[0],
            size = 0,
            theirProgress = final[show][showName].progress,
            theyWatched = 0,
            yourProgress = yourShows[showName],
            youWatched = 0;
        if (yourProgress != undefined) {
            for (ep in yourProgress.progress) {
                if (yourProgress.progress[ep]) {
                    youWatched += 1;
                }
            }
        }
        for (ep in theirProgress) {
            if (theirProgress[ep]) {
                theyWatched += 1;
            }
            size += 1;
        }

        var showItem = document.createElement("li");
        showItem.classList.add("show-item");
        if (thisUser == you) {
            showItem.classList.add("show-item-yours");
        }

        var showItemCover = document.createElement("a");
        showItemCover.classList.add("show-item-cover");
        showItemCover.style.backgroundImage = "url(" + shows[showName].cover + ")";
        showItemCover.href = shows[showName].link;

        var showItemProgressThem = document.createElement("div"),
            showItemProgressThemBar = document.createElement("div"),
            showItemProgressYou = document.createElement("div"),
            showItemProgressYouBar = document.createElement("div");
        showItemProgressThem.classList.add('show-item-progress');
        showItemProgressThem.classList.add('show-item-progress--them');
        showItemProgressThemBar.classList.add('show-item-progress-bar');
        showItemProgressThemBar.style.width = ((theyWatched /  size) * 100) + "%";
        if (theyWatched === size) {
            showItemProgressThem.classList.add('show-item-progress--finished');
        }
        showItemProgressThem.appendChild(showItemProgressThemBar);
        showItemProgressYou.classList.add('show-item-progress');
        showItemProgressYou.classList.add('show-item-progress--you');
        showItemProgressYouBar.classList.add('show-item-progress-bar');
        if (youWatched > 0) {
            showItemProgressYouBar.style.width = ((youWatched /  size) * 100) + "%";
            showItem.classList.add('show-item--added');
            if (youWatched === size) {
                showItemProgressYou.classList.add('show-item-progress--finished');
            }
        }
        showItemProgressYou.appendChild(showItemProgressYouBar);

        var showItemTitle = document.createElement("div");
        showItemTitle.classList.add('show-item-title');
        showItemTitle.innerHTML = showName;

        var showItemBtnAddCont = document.createElement("div"),
            showItemBtnAdd = document.createElement("div"),
            showItemBtnAddType = document.createElement("p"),
            showItemBtnAddedCont = document.createElement("div"),
            showItemBtnAdded = document.createElement("div"),
            showItemBtnAddedType = document.createElement("p");
        showItemBtnAddCont.classList.add("show-item-btn");
        showItemBtnAddCont.classList.add("show-item-btn--add-cont");
        showItemBtnAddCont.addEventListener("click", function(){addShowWatchlist(this);}, false);
        showItemBtnAdd.classList.add("show-item-btn--add");
        showItemBtnAddType.innerHTML = "Add to Watchlist";
        showItemBtnAddCont.appendChild(showItemBtnAdd);
        showItemBtnAddCont.appendChild(showItemBtnAddType);
        showItemBtnAddedCont.classList.add("show-item-btn");
        showItemBtnAddedCont.classList.add("show-item-btn--added-cont");
        showItemBtnAdded.classList.add("show-item-btn--added");
        showItemBtnAddedType.innerHTML = "In Watchlist";
        showItemBtnAddedCont.appendChild(showItemBtnAdded);
        showItemBtnAddedCont.appendChild(showItemBtnAddedType);
        showItem.appendChild(showItemCover);
        showItem.appendChild(showItemProgressThem);
        showItem.appendChild(showItemProgressYou);
        showItem.appendChild(showItemTitle);
        showItem.appendChild(showItemBtnAddCont);
        showItem.appendChild(showItemBtnAddedCont);
        showListContainer.appendChild(showItem);

        /* SHOW ITEM EXAMPLE:
        <li class="show-item">
            <div class="show-item-cover" style="background-image: url(img-url);"></div>
            <div class="show-item-progress show-item-progress--them">
                <div class="show-item-progress-bar"></div>
            </div>
            <div class="show-item-progress show-item-progress--you">
                <div class="show-item-progress-bar"></div>
            </div>
            <div class="show-item-title">Arrested Development</div>
            <div class="show-item-btn show-item-btn--add-cont" onclick="addShowWatchlist(this);">
                <div class="show-item-btn--add"></div>
                <p>Add to Watchlist</p>
            </div>
            <div class="show-item-btn show-item-btn--added-cont" onclick="addShowWatchlist(this);">
                <div class="show-item-btn--added"></div>
                <p>In Watchlist</p>
            </div>
        </li>
        */
        }
        for (var i = 0; i < final.length; i++) {
            var item = showListContainer.getElementsByClassName('show-item')[i];
            buildShowsHelp(item);
    }
}

// buildShowsHelp: HTMLElement --> void
// binds an event to a given show-item
function buildShowsHelp(item) {
    var showItemBtnAddedCont = item.getElementsByClassName('show-item-btn--added-cont')[0],
        name = item.getElementsByClassName('show-item-title')[0].innerHTML;
    showItemBtnAddedCont.addEventListener("click", function(){remModal(true, 'modal-remove--show', name);}, false);
}

// arrContains : Array[Element] x Element --> Boolean
// returns true if the given array contains the given element
function arrContains(arr, t) {
    if (arr == undefined) {
        return false;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === t) {
                return true;
            }
        }
        return false;
    }
}

// createFriendList : Array[User] x Array[User] --> Array[User]
// creates a list of users, sorted by you, common friends, and unknowns
function createFriendList(all, common) {
    var friends = [],
        friendsTemp = [];
    console.log(all);
    console.log(common);
    if (thisUser != you && (arrContains(all, you.username) || arrContains(common, you.username))) {
        friends.unshift(you);
    }
    for (friend in common) {
        if (!arrContains(friends, getUser(common[friend]))) {
            friendsTemp.push(getUser(common[friend]));
        }
    }
    append(friends, quicksortUsers(friendsTemp));
    friendsTemp = [];
    for (friend in all) {
        if (!arrContains(friends, getUser(all[friend]))) {
            friendsTemp.push(getUser(all[friend]));
        }
    }
    return append(friends, quicksortUsers(friendsTemp));
}

// quicksortUsers : Array[User] --> Array[User]
// uses quicksort to sort users in an array
function quicksortUsers(arr) {
    if (arr.length > 1) {
        var pivot = arr[0];
        arr.splice(0, 1);
        var befores = quicksortUsers(filterUser(arr, pivot, true)),
            afters = quicksortUsers(filterUser(arr, pivot, false));
        befores.push(pivot);
        return append(befores, afters);
    } else {
        return arr;
    }
}

// append : Array x Array --> Array
// append the second given arraylist onto the first one
function append(arr1, arr2) {
    for (elem in arr2) {
        arr1.push(arr2[elem]);
    }
    return arr1;
}

// filterUser : Array[User] x User x Boolean --> Array[User]
// filters an array of users around a pivot, either returning those who'd come before or after the pivot
// helper to the quicksortUsers function
function filterUser(arr, pivot, before) {
    var result = [];
    for (user in arr) {
        if ((before && compareUser(arr[user], pivot) < 0)
        || (!before && compareUser(arr[user], pivot) >= 0)) {
            result.push(arr[user]);
        }
    }
    return result;
}

// compareUser : User x User --> Integer
// returns either 1, 0, or -1 to compare User's names
// helper to the filterUser function
function compareUser(user1, user2) {
    var user1First = user1.firstname,
        user2First = user2.firstname;
    if (user1First.localeCompare(user2First) == 0) {
        return user1.lastname.localeCompare(user2.lastname);
    } else {
        return user1First.localeCompare(user2First);
    }
}

// addShowWatchlist : <HTML> --> void
// adds a show to your watchlist based on the show button clicked
function addShowWatchlist(btn) {
    var episodes = document.getElementsByClassName('show-item'),
        index,
        add;
    if (btn.classList.contains('show-item-btn--add-cont')) {
        var buttons = document.getElementsByClassName('show-item-btn--add-cont');
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i] === btn) {
                index = i;
            }
        }
    } else {
        var buttons = document.getElementsByClassName('show-item-btn--added-cont');
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i] === btn) {
                index = i;
            }
        }
    }
    if (episodes[index].classList.contains('show-item--added')) {
        episodes[index].classList.remove('show-item--added');
    } else {
        episodes[index].classList.add('show-item--added');
    }
}
