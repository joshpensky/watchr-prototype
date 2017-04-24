window.addEventListener("keyup", function(e) {
    var key = e.keyCode ? e.keyCode : e.which,
        allModals = document.getElementsByClassName('modal-remove'),
        chosenModal = null,
        body = document.getElementsByTagName('body')[0],
        darkCover = document.getElementsByClassName('dark-cover')[0];
    for (var i = 0; i < allModals.length; i++) {
        if (!allModals[i].classList.contains('modal--hidden')) {
            chosenModal = allModals[i];
        }
    }
    if (chosenModal != null) {
        var type;
        for (var i = 0; i < chosenModal.classList.length; i++) {
            if (chosenModal.classList[i] == "modal-remove--show"
                || chosenModal.classList[i] == "modal-remove--movie"
                || chosenModal.classList[i] == "modal-remove--friend") {
                    type = chosenModal.classList[i];
                }
        }
        if (key == 27) { /*ESC*/
            remModal(false, type, '');
        }
    }
}, false);


function remModal(toggle, which, what, yesFunc) {
    console.log(yesFunc);
    var body = document.getElementsByTagName('body')[0],
        allModals = document.getElementsByClassName('modal-remove'),
        chosenModal,
        darkCover = document.getElementsByClassName('dark-cover')[0];

    for (var i = 0; i < allModals.length; i++) {
        if (allModals[i].classList.contains(which)) {
            chosenModal = allModals[i];
        }
    }
    if (toggle) {
        var modalBtns = chosenModal.querySelector(".modal-btns");
        while (modalBtns.hasChildNodes()) {
            modalBtns.removeChild(modalBtns.lastChild);
        }
        var yesBtn = document.createElement("div"),
            noBtn = document.createElement("div");
        yesBtn.classList.add("modal-btn");
        yesBtn.classList.add("modal-btn-secondary");
        yesBtn.addEventListener("click", function(){yesFunc(); remModal(false, which, what);}, false);
        yesBtn.innerHTML = "Yes";
        noBtn.classList.add("modal-btn");
        noBtn.classList.add("modal-btn-primary");
        noBtn.addEventListener("click", function(){remModal(false, which, what);}, false);
        noBtn.innerHTML = "No";
        modalBtns.appendChild(yesBtn);
        modalBtns.appendChild(noBtn);

            /*
            <div class="modal-btn modal-btn-secondary" onclick="addFriend(false); remModal(false, 'modal-remove--friend', 'Mike');">Yes</div>
            <div class="modal-btn modal-btn-primary" onclick="remModal(false, 'modal-remove--friend', 'Mike');">No</div>*/


        var modalHeader = chosenModal.getElementsByClassName('modal-header')[0],
            modalBody = chosenModal.getElementsByClassName('modal-body')[0];
        if (which == 'modal-remove--show') {
            modalHeader.innerHTML = "Remove " + what + " from your Watchlist?";
            modalBody.innerHTML = "You will lose all progress you currently have on this show.";
        } else if (which == 'modal-remove--friend') {
            modalHeader.innerHTML = "Remove " + what + " as a friend?";
            modalBody.innerHTML = "You will not be able to share your adventures with them.";
        }
        // ADD ACTION
        chosenModal.classList.remove('modal--hidden');
        darkCover.classList.remove('dark-cover--hidden');
        body.style.overflow = "hidden";
    } else {
        chosenModal.classList.add('modal--hidden');
        darkCover.classList.add('dark-cover--hidden');
        body.style.overflow = "auto";
    }
}
