var users;

window.addEventListener("load", function() {
    readFile(function(l, u, s, m) {
        if (l.loggedin != "") {
            window.location.href = "/home.php";
        }
        users = u;
        document.querySelector("#username").focus();
    });
}, false);

function correctLogin() {
    var username = document.querySelector("#username"),
        password = document.querySelector("#password"),
        foundUser = undefined,
        errorMsg = document.querySelector(".msg--error");
    for (user in users) {
        if (username.value.toLowerCase() == "" || password.value == "") {
            errorMsg.innerHTML = "Please enter your username/email and password";
            errorMsg.classList.remove("msg--hidden");
            username.focus();
            return false;
        } else if ((username.value.toLowerCase() == users[user].username
            || username.value.toLowerCase() == users[user].email)
            && password.value == users[user].password) {
                foundUser = users[user];
                errorMsg.classList.add("msg--hidden");
        }
    }
    if (foundUser == undefined) {
        errorMsg.innerHTML = "The username and password you entered did not match our records. Please double-check and try again.";
        errorMsg.classList.remove("msg--hidden");
        password.value = "";
        username.focus();
    } else {
        loginUser(foundUser.username);
    }
    return false;
}
