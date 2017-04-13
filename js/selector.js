function changeSection(selector) {
    var selItems = document.getElementsByClassName('media-sel-item'),
        which = selector.getElementsByClassName('media-sel-item-title')[0].innerHTML.toLowerCase(),
        chosenSelector = which.split(" "),
        sections = document.getElementsByClassName('profile-section'),
        chosenSection,
        timeout;

    which = "";
    for(var i = 0; i < chosenSelector.length; i++) {
        which += chosenSelector[i];
        if (i < chosenSelector.length - 1) {
            which += "-";
        }
    }

    for (var i = 0; i < sections.length; i++) {
        if (sections[i].classList.contains(which)) {
            chosenSection = sections[i];
        }
    }

    for (var i = 0; i < selItems.length; i++) {
        selItems[i].classList.remove('media-sel-item--selected');
    }
    selector.classList.add('media-sel-item--selected');
    for (var i = 0; i < sections.length; i++) {
        if (!sections[i].classList.contains(which)) {
            sections[i].classList.add('profile-section--hidden');
        }
    }

    timeout = setTimeout(function () {
        chosenSection.classList.remove('profile-section--invis');
        for (var i = 0; i < sections.length; i++) {
            if (!sections[i].classList.contains(which)) {
                sections[i].classList.add('profile-section--invis');
            }
        }
        timeout = setTimeout(function () {
            chosenSection.classList.remove('profile-section--hidden');
        }, 25);
    }, 250);
}
