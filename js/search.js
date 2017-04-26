var users, shows, movies, currUser, query;

window.addEventListener("load", function() {
    readFile(function(l, u, s, m) {
        users = u;
        for (user in users) {
            if (user == l.loggedin) {
                currUser = users[user];
            }
        }
        shows = s;
        movies = m;
        if (window.location.href.indexOf("/search.php?id=") !== -1) {
            query = window.location.href.split("/search.php?id=")[1].split("%20").join(" ");
            var bigSearch = document.querySelector(".content").querySelector("#searchbar");
            bigSearch.value = query;
            bigSearch.focus();
            displayResults();
        }
    });
}, false);

function returnResults(query) {
    return filterResults(searchShows(query), searchMovies(query), searchUsers(query));
}

function filterResults(shows, movies, users) {
    if (shows.length > 2) {
        shows = shows.splice(0, 2);
    }
    if (movies.length > 2) {
        movies = movies.splice(0, 2);
    }
    if (users.length > 2) {
        users = users.splice(0, 2);
    }
    return append(shows, append(movies, users));
}

function searchShows(query) {
    var results = [];
    for (show in shows) {
        var url = shows[show].title.toLowerCase().split(" ").join("_");
        if (show.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
            var result = {};
            result["type"] = "show";
            result["title"] = shows[show].title;
            // ADDS LINKS
            result ["link"] = "/shows/" + url + ".php";
            result["img"] = shows[show].cover;
            result["info1"] = shows[show].yearStart + " - " + ((shows[show].yearEnd == 0) ? "Present" : shows[show].yearEnd);
            var seasons = 0;
            for (ssn in shows[show].seasons) {
                seasons += 1;
            }
            result["info2"] = seasons + " Seasons";
            results.push(result);
        }
    }
    return results;
}

function searchMovies(query) {
    var results = [];
    for (movie in movies) {
        var url = movies[movie].title.toLowerCase().split(" ").join("_");
        console.log(url);
        if (movie.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
            var result = {};
            result["type"] = "movie";
            result["title"] = movies[movie].title;
            // ADDS LINKS
            result ["link"] = "/movies/" + url + ".php";
            result["img"] = movies[movie].cover;
            result["info1"] = movies[movie].yearReleased;
            result["info2"] = movies[movie].length;
            results.push(result);
        }
    }
    return results;
}

function searchUsers(query) {
    var results = [];
    for (user in users) {
        if (users[user].username != currUser.username) {
            var username = users[user].username,
                name = users[user].firstname + " " + users[user].lastname;
            if (username.toLowerCase().indexOf(query.toLowerCase()) !== -1
            || name.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                var result = {};
                result["type"] = "user";
                result["title"] = name;
                // ADDS LINKS
                result["link"] = "/users/" + username + ".php";
                result["img"] = users[user].picture;
                result["info1"] = "@" + users[user].username;
                result["info2"] = users[user].rank.name;
                results.push(result);
            }
        }
    }
    return results;
}

// append : Array x Array --> Array
// append the second given arraylist onto the first one
function append(arr1, arr2) {
    for (elem in arr2) {
        arr1.push(arr2[elem]);
    }
    return arr1;
}


function displayResults() {
    var result = document.querySelector("h1").querySelector("span"),
        showResults = searchShows(query),
        movieResults = searchMovies(query),
        userResults = searchUsers(query);
    result.innerHTML = query;
    var showResCont = document.querySelector(".shows").querySelector(".search-results"),
        movieResCont = document.querySelector(".movies").querySelector(".search-results"),
        userResCont = document.querySelector(".users").querySelector(".search-results");
    buildResults(showResults, showResCont, "show");
    buildResults(movieResults, movieResCont, "movie");
    buildResults(userResults, userResCont, "user");



    /*
    <a href="/shows/dirk_gently's_holistic_detective_agency.php" class="search-item search-item--show">
        <div class="search-item--cover"></div>
        <div class="search-item--title">Dirk Gently's Holistic Detective Agency</div>
        <div class="search-item--caption">2016 - Present</div>
        <div class="search-item--caption">3 Seasons</div>
    </a>
    */
}

function buildResults(results, container, type) {
    if (results.length == 0) {
        container.appendChild(buildEmpty("No " + type + " results for \"" + query + "\"", ""));
    } else {
        for (var i = 0; i < results.length; i++) {
            var searchItem = document.createElement("a"),
                searchItemCover = document.createElement("div"),
                searchItemTitle = document.createElement("div"),
                searchItemYear = document.createElement("div"),
                searchItemCaption = document.createElement("div");
            searchItem.classList.add("search-item");
            searchItem.classList.add("search-item--" + results[i].type);
            searchItem.href = results[i].link;
            searchItemCover.classList.add("search-item--cover");
            if (results[i].img != "") {
                searchItemCover.style.backgroundImage = "url(" + results[i].img + ")";
            }
            searchItemTitle.classList.add("search-item--title");
            searchItemTitle.innerHTML = results[i].title;
            searchItemYear.classList.add("search-item--caption");
            searchItemYear.innerHTML = results[i].info1;
            searchItemCaption.classList.add("search-item--caption");
            searchItemCaption.innerHTML = results[i].info2;
            searchItem.appendChild(searchItemCover);
            searchItem.appendChild(searchItemTitle);
            searchItem.appendChild(searchItemYear);
            searchItem.appendChild(searchItemCaption);
            container.appendChild(searchItem);
        }
    }
}
