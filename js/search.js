var users, shows;

window.addEventListener("load", function() {
    loadJSON("/data/userdata.json", function(response) {
        loadJSON("/data/shows.json", function(response2) {
            users = JSON.parse(response);
            shows = JSON.parse(response2);
        });
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

function returnResults(query) {
    return filterResults(searchShows(query), [], searchUsers(query));
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
        var url = show.toLowerCase().split(" "),
            finalUrl = "";
        for (var i = 0; i < url.length; i++) {
            finalUrl += url[i];
            if (i != url.length - 1) {
                finalUrl += "-";
            }
        }
        if (show.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
            var result = {};
            result["type"] = "show";
            result["title"] = show;
            // ADDS LINKS
            result ["link"] = "/shows/" + finalUrl + ".php";
            result["img"] = shows[show].cover;
            results.push(result);
        }
    }
    return results;
}

function searchUsers(query) {
    var results = [];
    for (user in users) {
        if (users[user].username != "josh_jpeg") {
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
