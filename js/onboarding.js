var users,
    shows,
    movies;

var newUser = {
    "username": "",
    "email": "",
    "password": "",
    "firstname": "",
    "lastname": "",
    "picture": "",
    "hero": "",
    "bio": randomQuote(),
    "rank": {
        "name": "Novice",
        "shows": {
            "years": 0,
            "months": 0,
            "days": 0,
            "hours": 0
        },
        "movies": {
            "years": 0,
            "months": 0,
            "days": 0,
            "hours": 0
        }
    },
    "friends": [],
    "services": [],
    "genres": {
        "loved": [],
        "liked": [],
        "disliked": []
    },
    "shows": {},
    "movies": {},
    "favorites": {
        "shows": {},
        "movies": {}
    },
    "challenges": {
        "win": 0,
        "lose": 0
    }
};
/*
    "username": "",
    "email": "",
    "password": "",
    "firstname": "",
    "lastname": "",
    "picture": "",
    "hero": "",
    "bio": randomQuote(),
    "rank": {
        "name": "Novice",
        "shows": {
            "years": 0,
            "months": 0,
            "days": 0,
            "hours": 0
        },
        "movies": {
            "years": 0,
            "months": 0,
            "days": 0,
            "hours": 0
        }
    },
    "services": [],
    "friends": [],
    "genres": {
        "loved": [],
        "liked": [],
        "disliked": []
    },
    "shows": {},
    "movies": {},
    "favorites": {
        "shows": {},
        "movies": {}
    },
    "challenges": {
        "win": 0,
        "lose": 0
    }
};*/

window.addEventListener("load", function() {
    readFile(function(l, u, s, m) {
        users = u;
        shows = s;
        movies = m;
    });
    initGenres();
    document.querySelector("#fullname").focus();
}, false);

function randomQuote() {
    var quotes = [
        "\"I have no idea what I'm doing, but I know I'm doing it really, really well.\" - Andy Dwyer, Parks and Recreation",
        "\"I'm not superstitious, but I'm a little-stitious.\" - Michael Scott, The Office",
        "\"I don't get history. If I wanted to know what happened in Europe a long time ago, I'd watch Game of Thrones.\" - Troy Barnes, Community",
        "\"Here's some money. Go see a star war.\" - Lucille Bluth, Arrested Development",
        "\"I am the one who knocks!\" - Walter White, Breaking Bad",
        "\"Yes to love, yes to life, yes to staying in more!\" - Liz Lemon, 30 Rock",
        "\"I always think of nice things, but I never act on them.\" - Larry David, Curb Your Enthusiasm",
        "\"What is your spaghetti policy here?\" - Charlie Kelly, It's Always Sunny in Philadelphia",
        "\"You can't just give up! Is that what a dinosaur would do?\" - Joey Tribbiani, Friends",
        "\"The gym, or as I like to call it, the institute of things I can't do.\" - Eric Foreman, That 70s' Show",
        "\"Have you tried turning it off and on again?\" - Roy Trenneman, The IT Crowd"
    ];
    return quotes[getRandomIntInclusive(0, quotes.length - 1)];
}

function nameReplace() {
    var h6 = document.getElementsByTagName('h6');
    for (var i = 0; i < h6.length; i++) {
        var span = h6[i].querySelector('span');
        if (span != undefined) {
            span.innerHTML = newUser.firstname;
        }
    }
}

function getCurrSection() {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        if (!sections[i].classList.contains('section--hidden')) {
            return sections[i];
        }
    }
}

function centerScrolls() {
    var genresCont = document.querySelector(".genres-container"),
        genres = document.querySelector(".genres");
    genresCont.scrollLeft = (genres.offsetWidth - genresCont.offsetWidth) / 2;
    var servicesCont = document.querySelector(".services-container"),
        services = document.querySelector(".services");
    servicesCont.scrollLeft = (services.offsetWidth - servicesCont.offsetWidth) / 2;
}

function objectSize(obj) {
    var size = 0;
    for (key in obj) {
        size += 1;
    }
    return size;
}

function nextPage() {
    var currSection = getCurrSection(),
        sections = document.getElementsByClassName('section'),
        nextSection;
    for (var i = 0; i < sections.length; i++) {
        if (sections[i] === currSection) {
            if (i < sections.length - 1) {
                nextSection = sections[i + 1];
            } else {
                nextSection = currSection;
            }
        }
    }
    if ((currSection.id == "welcome" && checkUsername(true) && checkName(true))
        || (currSection.id == "genres" && newUser.genres.liked.length + newUser.genres.loved.length >= 3)
        || (currSection.id == "shows" && objectSize(newUser.shows) >= 3)
        || (currSection.id == "movies" && objectSize(newUser.movies) >= 3)
        || (currSection.id == "services")
        || (currSection.id == "password" && checkPass(false))) {
            currSection.classList.add('section--hidden');
            nextSection.classList.remove('section--hidden');
    } else if (currSection.id == "finish") {
        users[newUser.username] = newUser;
        createUser(newUser.username);
        writeToFile(users, "userdata.json");
        loginUser(newUser.username);
    } else {
        currSection.classList.remove('section--hidden');
    }
}

function submitInfo() {
    var fullname = document.getElementById('fullname').value,
        email = document.getElementById('email').value,
        username = document.getElementById('username').value,
        nextBtn = getCurrSection().querySelector('.button');
    if (checkUsername(false) && checkName(false)) {
        newUser.firstname = fullname.split(" ")[0];
        newUser.lastname = fullname.split(" ")[1];
        newUser.email = email;
        newUser.username = username;
        nextBtn.classList.remove("button--disabled");
    } else {
        nextBtn.classList.add("button--disabled");
    }
    return false;
}

function checkPass(changeElem) {
    var passwordCont = document.getElementById('pass--cont'),
        password = document.getElementById('pass'),
        confPasswordCont = document.getElementById('confpass--cont'),
        confPassword = document.getElementById('confpass'),
        nextBtn = getCurrSection().querySelector('.button');

    if (password.value.length < 8) {
        if (changeElem) {
            password.classList.add("textfield--error");
            var children = Array.prototype.slice.call(passwordCont.childNodes),
                create = true;
            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
                    create = false;
                }
            }
            if (create) {
                var errorMsg = document.createElement("p");
                errorMsg.classList.add("msg");
                errorMsg.classList.add("msg--error");
                errorMsg.innerHTML = "This password is not long enough.";
                passwordCont.insertBefore(errorMsg, passwordCont.children[1]);
            }
        }
        nextBtn.classList.add("button--disabled");
        return false;
    } else if (password.value != confPassword.value) {
        password.classList.remove("textfield--error");
        var children = Array.prototype.slice.call(passwordCont.childNodes);
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
                passwordCont.removeChild(children[i]);
            }
        }
        if (changeElem) {
            confPassword.classList.add("textfield--error");
            var children = Array.prototype.slice.call(confPasswordCont.childNodes),
                create = true;
            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
                    create = false;
                }
            }
            if (create) {
                var errorMsg = document.createElement("p");
                errorMsg.classList.add("msg");
                errorMsg.classList.add("msg--error");
                errorMsg.innerHTML = "These passwords do not match.";
                confPasswordCont.insertBefore(errorMsg, confPasswordCont.children[1]);
            }
        }
        nextBtn.classList.add("button--disabled");
        return false;
    }
    password.classList.remove("textfield--error");
    var children = Array.prototype.slice.call(passwordCont.childNodes);
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
            passwordCont.removeChild(children[i]);
        }
    }
    confPassword.classList.remove("textfield--error");
    var children = Array.prototype.slice.call(confPasswordCont.childNodes);
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
            confPasswordCont.removeChild(children[i]);
        }
    }
    nextBtn.classList.remove("button--disabled");
    newUser.password = password.value;
    return true;
}

function checkUsername(changeElem) {
    var usernameCont = document.getElementById('username--cont'),
        username = document.getElementById('username');
    for (user in users) {
        if (users[user].username.toLowerCase() == username.value.toLowerCase()) {
            if (changeElem) {
                username.classList.add("textfield--error");
                var children = Array.prototype.slice.call(usernameCont.childNodes),
                    create = true;
                for (var i = 0; i < children.length; i++) {
                    if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
                        create = false;
                    }
                }
                if (create) {
                    var errorMsg = document.createElement("p");
                    errorMsg.classList.add("msg");
                    errorMsg.classList.add("msg--error");
                    errorMsg.innerHTML = "Sorry, that username has already been taken";
                    usernameCont.insertBefore(errorMsg, usernameCont.children[1]);
                }
            }
            return false;
        }
    }
    if (username.value == "" && username.value.replace(/\s+/g, '') == "") {
        if (changeElem) {
            username.classList.add("textfield--error");
            var children = Array.prototype.slice.call(usernameCont.childNodes),
                create = true;
            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
                    create = false;
                }
            }
            if (create) {
                var errorMsg = document.createElement("p");
                errorMsg.classList.add("msg");
                errorMsg.classList.add("msg--error");
                errorMsg.innerHTML = "Please enter a valid username";
                usernameCont.insertBefore(errorMsg, usernameCont.children[1]);
            }
        }
        return false;
    }
    username.classList.remove("textfield--error");
    var children = Array.prototype.slice.call(usernameCont.childNodes);
    for (var i = 0; i < children.length; i++) {
        if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
            usernameCont.removeChild(children[i]);
        }
    }
    return true;
}

function checkName(changeElem) {
    var fullnameCont = document.getElementById('fullname--cont'),
        fullname = document.getElementById('fullname'),
        nameArr = fullname.value.split(" ");
    if (nameArr.length == 2 && nameArr[0] != "" && nameArr[0].replace(/\s+/g, '') != ""
    && nameArr[1] != "" && nameArr[1].replace(/\s+/g, '') != "") {
        fullname.classList.remove("textfield--error");
        var children = Array.prototype.slice.call(fullnameCont.childNodes);
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
                fullnameCont.removeChild(children[i]);
            }
        }
        return true;
    } else {
        if (changeElem) {
            fullname.classList.add("textfield--error");
            var children = Array.prototype.slice.call(fullnameCont.childNodes),
                create = true;
            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeType != 3 && children[i].classList.contains("msg--error")) {
                    create = false;
                }
            }
            if (create) {
                var errorMsg = document.createElement("p");
                errorMsg.classList.add("msg");
                errorMsg.classList.add("msg--error");
                errorMsg.innerHTML = "Please enter your full (first and last) name.";
                fullnameCont.insertBefore(errorMsg, fullnameCont.children[1]);
            }
        }
        return false;
    }
}
var boolStart = false,
    pressTimer;
function likeGenre(like, item) {
    var timeout,
        genreName = item.querySelector('.genre-item-type').innerHTML;
    if (!like) {
        newUser.genres.disliked.push(genreName);
        if (indexOf(newUser.genres.loved, genreName) != -1) {
            newUser.genres.loved.splice(indexOf(newUser.genres.loved, genreName), 1);
        } else if (indexOf(newUser.genres.liked, genreName) != -1) {
            newUser.genres.liked.splice(indexOf(newUser.genres.liked, genreName), 1);
        }
        item.classList.add('genre-item--disliked');
        item.classList.add('genre-item--animate');
        timeout = setTimeout(function() {
            item.classList.remove('genre-item--animate');
            boolStart = false;
        }, 500);
    } else {
        if (item.classList.contains('genre-item--disliked')) {
            if (!boolStart) {
                if (indexOf(newUser.genres.disliked, genreName) != -1) {
                    newUser.genres.disliked.splice(indexOf(newUser.genres.disliked, genreName), 1);
                }
                item.classList.remove('genre-item--disliked');
                item.classList.remove('genre-item--liked');
                item.classList.remove('genre-item--loved');
            }
        } else if (item.classList.contains('genre-item--liked')) {
            newUser.genres.loved.push(genreName);
            if (indexOf(newUser.genres.liked, genreName) != -1) {
                newUser.genres.liked.splice(indexOf(newUser.genres.liked, genreName), 1);
            }
            item.classList.remove('genre-item--animate');
            item.offsetWidth = item.offsetWidth;
            boolStart = true;
            item.classList.add('genre-item--animate');
            item.classList.remove('genre-item--liked');
            item.classList.add('genre-item--loved');
            timeout = setTimeout(function() {
                item.classList.remove('genre-item--animate');
                boolStart = false;
            }, 500);
        } else if (item.classList.contains('genre-item--loved')) {
            if (indexOf(newUser.genres.loved, genreName) != -1) {
                newUser.genres.loved.splice(indexOf(newUser.genres.loved, genreName), 1);
            }
            item.classList.remove('genre-item--loved');
        } else {
            newUser.genres.liked.push(genreName);
            item.classList.add('genre-item--animate');
            item.classList.add('genre-item--liked');
            timeout = setTimeout(function() {
                if (item.classList.contains('genre-item--animate') && !boolStart) {
                    item.classList.remove('genre-item--animate');
                }
            }, 500);
        }
    }
    var nextBtn = getCurrSection().querySelector('.button');
    if (newUser.genres.liked.length + newUser.genres.loved.length >= 3) {
        //users[username] = newUser;
        //writeToFile(users, "userdata.json");
        nextBtn.classList.remove("button--disabled");
    } else {
        nextBtn.classList.add("button--disabled");
    }
}

function initGenres() {
    var genres = [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Film Noir",
        "Game Show",
        "History",
        "Horror",
        "Indie",
        "Musical",
        "Mystery",
        "News",
        "Romance",
        "Sci-Fi",
        "Sport",
        "Talk Show",
        "Thriller",
        "War",
        "Western"
    ],
        genresCopy = [],
        shuffled = [];
    for (var i = 0; i < genres.length; i++) {
        genresCopy.push(genres[i]);
    }
    for (var i = 0; i < genres.length; i++) {
        var randIndex = getRandomIntInclusive(0, genresCopy.length - 1),
            newGenre = genresCopy[randIndex];
        shuffled.push(newGenre);
        genresCopy.splice(randIndex, 1);
    }
    var genres = document.querySelector(".genres"),
        elements = [];
    for (var i = 0; i < shuffled.length; i++) {
        var genreItem = document.createElement("div"),
            genreItemImgCont = document.createElement("div"),
            genreItemImg = document.createElement("div"),
            genreItemType = document.createElement("div"),
            url = shuffled[i].toLowerCase().split(" "),
            finalUrl = "";
        for (var j = 0; j < url.length; j++) {
            finalUrl += url[j];
        }
        url = finalUrl.split("-");
        finalUrl = "";
        for (var j = 0; j < url.length; j++) {
            finalUrl += url[j];
        }
        genreItem.classList.add("genre-item");
        genreItem.addEventListener("click", function() {likeGenre(true, this);}, false);
        genreItem.addEventListener("mousedown", function() {
            var thisItem = this;
            pressTimer = window.setTimeout(function() {boolStart=true;likeGenre(false, thisItem);}, 500);
            return false;
        }, false);
        genreItem.addEventListener("mouseup", function() {
            clearTimeout(pressTimer);
        }, false);
        genreItem.addEventListener("touchstart", function() {
            var thisItem = this;
            pressTimer = window.setTimeout(function() {boolStart=true;likeGenre(false, thisItem);}, 500);
            return false;
        }, false);
        genreItem.addEventListener("touchend", function() {
            clearTimeout(pressTimer);
        }, false);
        genreItem.addEventListener("touchmove", function() {
            clearTimeout(pressTimer);
        }, false);
        genreItemImgCont.classList.add("genre-item-img--cont");
        genreItemImg.classList.add("genre-item-img");
        genreItemImg.style.backgroundImage = "url('/img/genres/selected/" + finalUrl + "-big.png')";
        genreItemImgCont.appendChild(genreItemImg);
        genreItemType.classList.add("genre-item-type");
        genreItemType.innerHTML = shuffled[i];
        genreItem.appendChild(genreItemImgCont);
        genreItem.appendChild(genreItemType);
        elements.push(genreItem);
    }
    var processed = 5;
    while(elements.length > 0) {
        var genreRow = document.createElement("div");
        genreRow.classList.add("genres-row");
        for (var i = 0; i < processed; i++) {
            genreRow.appendChild(elements[0]);
            elements.splice(0, 1);
        }
        genres.appendChild(genreRow);
        if (processed == 5) {
            processed = 6;
        } else {
            processed = 5;
        }
    }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function indexOf(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i;
        }
    }
    return -1;
}

function chooseService(item) {
    var serviceItems = document.getElementsByClassName('service-item'),
        serviceName = item.querySelector("img").src;
    if (serviceName == "") {
        serviceName = item.innerHTML.split("<img>")[0];
    } else {
        serviceName = serviceName.replace(/%20/g, ' ').split("services/")[1].split(".png")[0].split("-sel")[0];
    }

    if (!arrContains(newUser.services, serviceName)) {
        newUser.services.push(serviceName);
        item.classList.add("service-item--added");
        item.querySelector("img").src = "/img/services/" + serviceName + "-sel.png";
    } else {
        item.classList.remove("service-item--added");
        item.querySelector("img").src = "/img/services/" + serviceName + ".png";
        for (var i = 0; i < newUser.services.length; i++) {
            if (newUser.services[i] == serviceName) {
                newUser.services.splice(i, 1);
            }
        }
    }
}

function chooseItems(isShow) {
    var chosenList = getCurrSection().querySelector(".chosen-list")
        chosenItems = chosenList.getElementsByClassName('chosen-item')
        jsonList = (isShow ? shows : movies);
    var index = 0;
    for (pick in (isShow ? newUser.shows : newUser.movies)) {
        for (item in jsonList) {
            if (item == pick) {
                if (index >= chosenItems.length) {
                    var newItem = document.createElement("div");
                    newItem.classList.add("chosen-item");
                    newItem.style.backgroundImage = "url(" + jsonList[item].cover + ")";
                    chosenList.appendChild(newItem);
                } else {
                    chosenItems[index].classList.remove("chosen-item--disabled");
                    chosenItems[index].style.backgroundImage = "url(" + jsonList[item].cover + ")";
                }
            }
        }
        index += 1;
    }

    if (chosenItems.length > objectSize((isShow ? newUser.shows : newUser.movies))) {
        if (chosenItems.length > 3) {
            while (chosenItems.length > 3) {
                chosenList.removeChild(chosenList.lastChild);
            }
        }
        for (var i = objectSize((isShow ? newUser.shows : newUser.movies)); i < 3; i++) {
            chosenItems[i].style.backgroundImage = "none";
            chosenItems[i].classList.add("chosen-item--disabled");
        }
    }
}

function likeItem(isShow, item) {
    var title = item.querySelector(".pick-item-title").innerHTML.replace(/&amp;/g, '&'),
        elemJSON,
        timeout;
    if (isShow) {
        for (show in shows) {
            if (shows[show].title == title) {
                elemJSON = shows[show];
            }
        }
    } else {
        for (movie in movies) {
            if (movies[movie].title == title) {
                elemJSON = movies[movie];
            }
        }
    }
    if (!boolStart) {
        if (item.classList.contains('pick-item--watched')) {
            if (isShow && newUser.shows[elemJSON.title] != undefined) {
                delete newUser.shows[elemJSON.title];
                chooseItems(true);
            } else if (!isShow && newUser.movies[elemJSON.title] != undefined) {
                delete newUser.movies[elemJSON.title];
                chooseItems(false);
            }
            item.classList.remove('pick-item--watched');
        } else {
            if (isShow && newUser.shows[elemJSON.title] == undefined) {
                var index = 1;
                newUser.shows[elemJSON.title] = {};
                newUser.shows[elemJSON.title].progress = {}
                for (ssn in elemJSON.seasons) {
                    for (ep in elemJSON.seasons[ssn]) {
                        newUser.shows[elemJSON.title].progress[index] = false;
                        index += 1;
                    }
                }
                chooseItems(true);
            } else if (!isShow && newUser.movies[elemJSON.title] == undefined) {
                newUser.movies[elemJSON.title] = false;
                chooseItems(false);
            }
            item.classList.add("pick-item--watched");
            item.classList.add("pick-item--animate");
            timeout = setTimeout(function() {
                item.classList.remove("pick-item--animate");
            }, 500);
        }
    }
    var nextBtn = getCurrSection().querySelector('.button');
    if (objectSize((isShow ? newUser.shows : newUser.movies)) >= 3) {
        nextBtn.classList.remove("button--disabled");
    } else {
        nextBtn.classList.add("button--disabled");
    }
}

var genShows = []

function generateShows() {
    boolStart = false;
    var refreshBtn = getCurrSection().querySelector(".refresh");
    if (!refreshBtn.classList.contains("refresh--disabled")) {
        if (genShows.length == 0) {
            for (show in shows) {
                genShows.push({rank: rankShow(shows[show], newUser.genres.liked, newUser.genres.loved,
                    newUser.genres.disliked), item: shows[show]});
            }
            genShows = reverse(sortRanks(genShows));
        }
        var pickContainer = getCurrSection().querySelector(".pick-container");
        while (pickContainer.hasChildNodes()) {
            pickContainer.removeChild(pickContainer.lastChild);
        }
        var picked = 0;
        while (picked < 6 && genShows.length > 0) {
            var pickItem = document.createElement("div"),
                pickItemCover = document.createElement("div"),
                pickItemTitle = document.createElement("div");
            pickItem.classList.add("pick-item");
            pickItem.addEventListener("click", function(){likeItem(true, this);}, false);
            pickItemCover.classList.add("pick-item-cover");
            pickItemCover.style.backgroundImage = "url(" + genShows[0].item.cover + ")"
            pickItemTitle.classList.add("pick-item-title");
            pickItemTitle.innerHTML = genShows[0].item.title;
            pickItem.appendChild(pickItemCover);
            pickItem.appendChild(pickItemTitle);
            pickContainer.appendChild(pickItem);
            genShows.splice(0, 1);
            picked += 1;
        }
        if (genShows.length == 0) {
            refreshBtn.classList.add("refresh--disabled");
        }
    }
}

var genMovies = [];

function generateMovies() {
    boolStart = false;
    var refreshBtn = getCurrSection().querySelector(".refresh");
    if (!refreshBtn.classList.contains("refresh--disabled")) {
        if (genMovies.length == 0) {
            for (movie in movies) {
                genMovies.push({rank: rankShow(movies[movie], newUser.genres.liked, newUser.genres.loved,
                    newUser.genres.disliked), item: movies[movie]});
            }
            genMovies = reverse(sortRanks(genMovies));
        }
        var pickContainer = getCurrSection().querySelector(".pick-container");
        while (pickContainer.hasChildNodes()) {
            pickContainer.removeChild(pickContainer.lastChild);
        }
        var picked = 0;
        while (picked < 6 && genMovies.length > 0) {
            var pickItem = document.createElement("div"),
                pickItemCover = document.createElement("div"),
                pickItemTitle = document.createElement("div");
            pickItem.classList.add("pick-item");
            pickItem.addEventListener("click", function(){likeItem(false, this);}, false);
            pickItemCover.classList.add("pick-item-cover");
            pickItemCover.style.backgroundImage = "url(" + genMovies[0].item.cover + ")"
            pickItemTitle.classList.add("pick-item-title");
            pickItemTitle.innerHTML = genMovies[0].item.title;
            pickItem.appendChild(pickItemCover);
            pickItem.appendChild(pickItemTitle);
            pickContainer.appendChild(pickItem);
            genMovies.splice(0, 1);
            picked += 1;
        }
        if (genMovies.length == 0) {
            refreshBtn.classList.add("refresh--disabled");
        }
    }
}

function sortRanks(ranks) {
    if (ranks.length > 1) {
        var pivot = ranks[0];
        ranks.splice(0, 1);
        var befores = sortRanks(filterRanks(ranks, pivot, true)),
            afters = sortRanks(filterRanks(ranks, pivot, false));
        befores.push(pivot);
        return append(befores, afters);
    } else {
        return ranks;
    }
}

function reverse(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.unshift(arr[i]);
    }
    return result;
}

function append(arr1, arr2) {
    for (elem in arr2) {
        arr1.push(arr2[elem]);
    }
    return arr1;
}

function filterRanks(ranks, pivot, before) {
    var result = [];
    for (var i = 0; i < ranks.length; i++) {
        var comparison;
        if (pivot.rank > ranks[i].rank) {
            comparison = -1;
        } else if (pivot.rank < ranks[i].rank) {
            comparison = 1;
        } else {
            comparison = pivot.item.title.localeCompare(ranks[i].item.title);
        }
        if ((before && comparison < 0) || (!before && comparison >= 0)) {
            result.push(ranks[i]);
        }
    }
    return result;
}

function rankShow(show, loved, liked, disliked) {
    var showGenres = show.genres,
        rank = 0;
    for (var i = 0; i < showGenres.length; i++) {
        if (arrContains(loved, showGenres[i])) {
            rank += 2;
        } else if (arrContains(liked, showGenres[i])) {
            rank += 1;
        } else if (arrContains(disliked, showGenres[i])) {
            rank -= 2;
        } else {
            rank -= 1;
        }
    }
    return rank;
}

function arrContains(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == elem) {
            return true;
        }
    }
    return false;
}
