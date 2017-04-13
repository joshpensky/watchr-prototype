function openActionsBar(actionElem) {
    "use strict";
    var navSec = document.getElementById('nav-sec'),
        search = document.getElementById('nav-search'),
        notif = document.getElementById('nav-notif'),
        profile = document.getElementById('nav-profile'),
        navSearch = document.getElementById('actions-bar--search'),
        navNotif = document.getElementById('actions-bar--notif'),
        navProfile = document.getElementById('actions-bar--profile');
    if (navSec.classList.contains('nav-open')) {
        if ((search.classList.contains('nav-button--sel') && actionElem === search)
            || (notif.classList.contains('nav-button--sel') && actionElem === notif)
            || (profile.classList.contains('nav-button--sel') && actionElem === profile)) {
            actionElem.classList.remove('nav-button--sel');
            navSec.classList.remove('nav-open');
            navSearch.classList.add('action--hidden');
            navNotif.classList.add('action--hidden');
            navProfile.classList.add('action--hidden');
        } else {
            search.classList.remove('nav-button--sel');
            notif.classList.remove('nav-button--sel');
            profile.classList.remove('nav-button--sel');
            actionElem.classList.add('nav-button--sel');

            navNotif.classList.remove('action--hidden');
            navProfile.classList.remove('action--hidden');
            navSearch.classList.remove('action--hidden');
            if (actionElem === notif){
                navSearch.classList.add('action--hidden');
                navProfile.classList.add('action--hidden');
            } else if (actionElem === profile) {
                navSearch.classList.add('action--hidden');
                navNotif.classList.add('action--hidden');
            } else if (actionElem === search) {
                navProfile.classList.add('action--hidden');
                navNotif.classList.add('action--hidden');
            }
        }
    } else {
        search.classList.remove('nav-button--sel');
        notif.classList.remove('nav-button--sel');
        profile.classList.remove('nav-button--sel');
        actionElem.classList.add('nav-button--sel');

        navSearch.classList.remove('action--hidden');
        navNotif.classList.remove('action--hidden');
        navProfile.classList.remove('action--hidden');
        if (actionElem === notif){
            navSearch.classList.add('action--hidden');
            navProfile.classList.add('action--hidden');
        } else if (actionElem === profile) {
            navSearch.classList.add('action--hidden');
            navNotif.classList.add('action--hidden');
        } else if (actionElem === search) {
            navProfile.classList.add('action--hidden');
            navNotif.classList.add('action--hidden');
        }

        navSec.classList.add('nav-open');
    }
}
