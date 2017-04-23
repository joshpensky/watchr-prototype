function readFile(callback) {
    var http = new XMLHttpRequest();
    var url = "/read.php";
    http.open("GET", url, true);
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var response = http.responseText.split("ENDOFFILE");
            users = JSON.parse(response[0]);
            shows = JSON.parse(response[1]);
            callback(users, shows);
        }
    }
    http.send();
}

function writeToFile(jsonData, file) {
    var http = new XMLHttpRequest();
    var url = "/write.php";//your url to the server side file that will receive the data.
    var data = "data=" + JSON.stringify(jsonData) + "&dir=data/" + file;
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
            //var h = JSON.parse(http.responseText.split(";dir=data/" + file)[0]);
        }
    };
    http.send(data);
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
