var users, shows, movies, currUser;

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
            result ["link"] = "/shows/" + url + ".php";
            result["img"] = movies[movie].cover;
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
