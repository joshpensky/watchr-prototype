window.addEventListener("load", function() {
    readFile(function(l, u, s, m) {
        createShows();
        //allUsers = u;
        //allShows = s;
        //loggedUser = getUser(l.loggedin);
        //buildShows();
        //initShows();
        var upcoming = document.querySelector(".upcoming");
        upcoming.appendChild(buildEmpty("Your schedule is clear for the day.", "Catch up on your shows"))
    });
}, false);
