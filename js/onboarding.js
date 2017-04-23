var users;

var newUser = {
    "username": "",
    "password": "",
    "firstname": "",
    "lastname": "",
    "picture": "",
    "hero": "",
    "bio": "",
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
    "friends": {},
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

window.addEventListener("load", function() {
    readFile(function(u, s) {
        users = u;
    });

    initGenres();

    var genresCont = document.querySelector(".genres-container"),
        genres = document.querySelector(".genres");
    genresCont.scrollLeft = (genres.offsetWidth - genresCont.offsetWidth) / 2;


}, false);

function getCurrSection() {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        if (!sections[i].classList.contains('section--hidden')) {
            return sections[i];
        }
    }
}

function nextPage() {
    var currSection = getCurrSection();
    if ((currSection.id == "welcome" && checkUsername(true) && checkName(true))
    || (currSection.id == "genres" && newUser.genres.liked.length + newUser.genres.loved.length >= 3)) {
        currSection.classList.add('section--hidden');
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
        //users[username] = newUser;
        //writeToFile(users, "userdata.json");
        nextBtn.classList.remove("button--disabled");
    } else {
        nextBtn.classList.add("button--disabled");
    }
    return false;
}

/*function checkPass() {
    var password = document.getElementById('pass'),
        confPassword = document.getElementById('confpass');

    console.log(password.value);
    console.log(confPassword.value);

    if (confPassword.value == "") {
        return false;
    } else if (password.value != confPassword.value) {
        confPassword.classList.add("bad-input");
        return false;
    } else {
        confPassword.classList.remove("bad-input");
        return true;
    }
}*/

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
        //console.log(finalUrl);
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
