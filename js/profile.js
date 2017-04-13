var users;
var shows;
var thisUser;
var you;

window.onload = function() {
    loadJSON("/data/userdata.json", function(response) {
        loadJSON("/data/shows.json", function(response2) {
            users = JSON.parse(response);
            shows = JSON.parse(response2);
            initProfile();
        });
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
    var profName = document.getElementsByClassName('header-info-name')[0].innerHTML;
    for (user in users) {
        var userFullname = users[user].firstname + " " + users[user].lastname;
        if (userFullname == profName) {
            thisUser = users[user];
        } else if (userFullname == "Josh Pensky") {
            you = users[user];
        }
    }
    var bio = document.getElementsByClassName('header-desc')[0],
        rank = document.getElementsByClassName('header-info-rank-type')[0],
        expShowY = document.getElementsByClassName('experience-show--years')[0],
        expShowM = document.getElementsByClassName('experience-show--months')[0],
        expShowD = document.getElementsByClassName('experience-show--days')[0],
        expShowH = document.getElementsByClassName('experience-show--hours')[0],
        expMovieY = document.getElementsByClassName('experience-movie--years')[0],
        expMovieM = document.getElementsByClassName('experience-movie--months')[0],
        expMovieD = document.getElementsByClassName('experience-movie--days')[0],
        expMovieH = document.getElementsByClassName('experience-movie--hours')[0];
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

    buildFriends();

    buildShows();
}

// buildFriends : Array[Element] x Element --> void
// builds the friends section in about
function buildFriends() {
    var theirFriends = thisUser.friends,
        theirFriendsArr = [],
        yourFriends = you.friends,
        commonFriends = [],
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
    var friendsList = createFriendList(theirFriendsArr, commonFriends);

    var friends = document.getElementsByClassName('section friends')[0],
        friendCt = friends.getElementsByClassName('section-header-type--sub')[0],
        friendContainer = friends.getElementsByClassName('friend-list')[0];

    friendCt.innerHTML = "(<span>" + friendsList.length + "</span>)";

    for (friend in friendsList) {
        var friendItem = document.createElement("li");
        friendItem.classList.add("friend-item");

        var friendItemImg = document.createElement("div");
        friendItemImg.classList.add('friend-item-img');
        friendItemImg.style.backgroundImage = "url(" + friendsList[friend].picture + ")";

        var friendItemInfo = document.createElement("div"),
            friendItemInfoName = document.createElement("p"),
            friendItemInfoRank = document.createElement("p");
        friendItemInfo.classList.add('friend-item-info');
        friendItemInfoName.classList.add('friend-item-info-name');
        friendItemInfoRank.classList.add('friend-item-info-rank');
        friendItemInfoName.innerHTML = friendsList[friend].firstname + "</br>" + friendsList[friend].lastname;
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
        } else if (arrContains(commonFriends, friendsList[friend].username)) {
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
}

function buildShows() {
    var showListContainer = document.getElementsByClassName('show-list')[0];
        yourShows = you.shows,
        favorites = thisUser.favorites.shows,
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
        showItemBtnAddCont.addEventListener("click", function(){addShow(this);}, false);
        showItemBtnAdd.classList.add("show-item-btn--add");
        showItemBtnAddType.innerHTML = "Add to Watchlist";
        showItemBtnAddCont.appendChild(showItemBtnAdd);
        showItemBtnAddCont.appendChild(showItemBtnAddType);
        showItemBtnAddedCont.classList.add("show-item-btn");
        showItemBtnAddedCont.classList.add("show-item-btn--added-cont");
        showItemBtnAddedCont.addEventListener("click", function(){addShow(this);}, false);
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
            <div class="show-item-btn show-item-btn--add-cont" onclick="addShow(this);">
                <div class="show-item-btn--add"></div>
                <p>Add to Watchlist</p>
            </div>
            <div class="show-item-btn show-item-btn--added-cont" onclick="addShow(this);">
                <div class="show-item-btn--added"></div>
                <p>In Watchlist</p>
            </div>
        </li>
        */
    }
}

// arrContains : Array[Element] x Element --> Boolean
// returns true if the given array contains the given element
function arrContains(arr, t) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return true;
        }
    }
    return false;
}

// createFriendList : Array[User] x Array[User] --> Array[User]
// creates a list of users, sorted by you, common friends, and unknowns
function createFriendList(all, common) {
    var friends = [],
        friendsTemp = [];
    friends.push(you);
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

// addShow : <HTML> --> void
// adds a show to your watchlist based on the show button clicked
function addShow(btn) {
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
