<!DOCTYPE HTML>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/css/nav.css">
        <script type="text/javascript" src="/js/data.js"></script>
        <script type="text/javascript" src="/js/nav.js"></script>
        <script type="text/javascript" src="/js/search.js"></script>
    </head>
    <body>
        <nav id="primary">
            <div class="nav-container">
                <a href="/home.php"><!-- <a href="http://webdev.joshuapensky.com"> -->
                    <div class="home">
                        <svg id="logo" width="35" height="35" viewBox="0 0 100 100">
                            <path class="logo-dark" d="M30.57,90.49C42.5,51.41,60.13,30.44,60.13,
                            30.44l-7-3.33-6-7.95-1.84.32L44.7,20l-.26.35s-19.51,24.8-24.8,55L29.78,
                            91.51l.72-.85Z"/>
                            <path class="logo-dark" d="M76,40.3,55.91,53.69,61.76,72,79.32,
                            61l14.07-8.8a3.16,3.16,0,0,0,0-5.36L82.7,40.2A6.17,6.17,0,0,0,76,40.3Z"/>
                            <path class="logo" d="M26.52,5.06,19.69.79A5.2,5.2,0,0,0,12,3.5c-2.9,
                            8.3-4.89,25.81-4.89,46.07,0,22.59,2.48,41.76,5.93,48.56a3.37,3.37,0,0,0,
                            4.86,1.33s9.11-5.67,10.71-6.7a4.47,4.47,0,0,0,
                            1.94-2.26c-.25.55-.82.3-1-.64-2.07-9.36-3.33-23.93-3.33-40.28,0-15.32,
                            1.14-29.08,3-38.46A5.84,5.84,0,0,0,26.52,5.06Z"/>
                            <path class="logo" d="M61.6,70c-.46-6.26-.72-13.16-.72-20.42,
                            0-6.66.22-13,.61-18.85a6.07,6.07,0,0,0-2.84-5.56L48.31,18.69a2.46,
                            2.46,0,0,0-3.14.79c-.2.26-.46.55-.46.55l-.2.27c.19-.25.81-1,
                            1.32-.78.26.11.26.77.22,1.35h0c0,.26-.06.53-.09.79l0,.13v0a240.36,
                            240.36,0,0,0-1.5,27.79c0,9,.39,17.46,1.09,24.81a4.57,4.57,0,0,0,7,
                            3.45l11-6.88A1.24,1.24,0,0,1,61.6,70Z"/>
                        </svg>
                        <p id="logotype">watchr</p>
                    </div>
                </a>
                <div class="middle">
                    <a class="nav-link" href="/upcoming.php"><!-- <a class="nav-link" href="http://webdev.joshuapensky.com/upcoming"> -->
                        <div id="nav-upcoming" class="nav-button">
                            <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                                <rect x="10.71" y="10.98" width="78.57" height="78.57" rx="2.22"
                                ry="2.22"/>
                                <line x1="10.71" y1="34.98" x2="89.29" y2="34.98"/>
                                <line x1="29.21" y1="2.51" x2="29.21" y2="19.44"/>
                                <line x1="70.79" y1="2.51" x2="70.79" y2="19.44"/>
                                <polyline points="45.36 50.52 51.84 50.52 51.84 72.73"/>
                            </svg>
                            <p class="nav-title">Upcoming</p>
                        </div>
                    </a>
                    <a class="nav-link">
                        <div id="nav-trending" class="nav-button">
                            <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                                <polyline points="2.87 82.13 29.25 52.67 51.79 71.37 97.13 17.87"/>
                                <polygon class="svgFill" points="77.21 20.91 97.13 17.87 95.61 37.8 77.21 20.91"/>
                            </svg>
                            <p class="nav-title fullwidth-svg">Trending</p>
                        </div>
                    </a>
                    <a class="nav-link" href="../watchlist.php"><!-- <a class="nav-link" href="http://webdev.joshuapensky.com/watchlist"> -->
                        <div id="nav-watchlist" class="nav-button">
                            <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                                <rect x="2.49" y="28.5" width="94.99" height="65.53" rx="2.22" ry="2.22"/>
                                <line x1="11.99" y1="17.24" x2="87.98" y2="17.24"/>
                                <line x1="20.6" y1="5.97" x2="79.37" y2="5.97"/>
                                <polygon points="64.98 61.22 40.54 45.27 40.54 77.18 64.98 61.22"/>
                            </svg>
                            <p class="nav-title fullwidth-svg">Watchlist</p>
                        </div>
                    </a>
                    <a class="nav-link">
                        <div id="nav-recommend" class="nav-button">
                            <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                                <path d="M8,45.53V92.05a4.34,4.34,0,0,0,4.34,4.34H87.76a4.34,4.34,0,
                                0,0,4.34-4.34V45.53"/>
                                <polyline points="40.88 45.53 40.88 95.64 59.24 95.64 59.24 45.53"/>
                                <line x1="66.1" y1="45.53" x2="66.1" y2="20.19"/>
                                <line x1="34.02" y1="20.19" x2="34.02" y2="45.53"/>
                                <path d="M4.84,20.19H95.29a2.16,2.16,0,0,1,2.16,2.16V45.53a0,0,0,0,
                                1,0,0H2.68a0,0,0,0,1,0,0V22.35A2.16,2.16,0,0,1,4.84,20.19Z"/>
                                <path d="M78.7,20.19a10.15,10.15,0,0,0-15-13.61L50.06,20.19,36.46,
                                6.58A10.15,10.15,0,0,0,21.41,20.17"/>
                            </svg>
                            <p class="nav-title">For You</p>
                        </div>
                    </a>
                </div>
                <div class="actions">
                    <div id="nav-search" class="nav-button nav-link" onclick="openActionsBar(this);">
                        <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                            <circle cx="45" cy="45" r="34.43"/>
                            <line x1="69.35" y1="69.35" x2="89.4" y2="89.4"/>
                        </svg>
                    </div>
                    <div id="nav-notif" class="nav-button nav-link" onclick="openActionsBar(this);">
                        <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                            <path d="M82,66.58,77,34.93A27.34,27.34,0,0,0,50,11.86h0A27.34,27.34,0,0,0,23,
                            34.93L18,66.58a3.8,3.8,0,0,1-2.68,3c-4.62,1.37-7,5.22-7.87,10.16a4,4,0,0,0,4,
                            4.79H88.59a4,4,0,0,0,4-4.79c-.86-4.94-3.25-8.78-7.87-10.16A3.8,3.8,0,0,1,82,
                            66.58Z"/>
                            <path d="M37.26,84.57a12.74,12.74,0,1,0,25.49,0"/>
                            <path d="M55.48,12.41V8.21A5.48,5.48,0,0,0,50,2.72h0a5.48,5.48,0,0,0-5.48,
                            5.48v4.2"/>
                        </svg>
                    </div>
                    <div id="nav-profile" class="nav-button nav-link" onclick="openActionsBar(this);">
                        <div class="profilepic" id="userprofile--pic"></div>
                    </div>
                </div>
            </div>
        </nav>
        <div id="nav-sec">
            <nav id="actions-bar" class="nav-closed">
                <!-- PROFILE ACTIONS BAR - START -->
                <div id="actions-bar--profile" class="action--hidden nav-container">
                    <a class="nav-link" onclick="logoutUser();">
                        <div id="nav-logout" class="nav-button">
                            <p class="nav-title">Log Out</p>
                        </div>
                    </a>
                    <a class="nav-link">
                        <div id="nav-help" class="nav-button">
                            <svg class="svgIcon" width="20" height="20" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="47.49"/>
                                <circle cx="50" cy="50" r="21"/>
                                <line x1="33.36" y1="66.64" x2="16.42" y2="83.58"/>
                                <line x1="83.58" y1="16.42" x2="66.63" y2="33.36"/>
                                <line x1="33.36" y1="33.36" x2="16.42" y2="16.42"/>
                                <line x1="83.58" y1="83.58" x2="66.64" y2="66.64"/>
                            </svg>
                            <p class="nav-title">Help</p>
                        </div>
                    </a>
                    <a class="nav-link">
                        <div id="nav-settings" class="nav-button">
                            <svg class="svgIcon" width="20" height="20" viewBox="0 0 100 100">
                                <circle cx="50" cy="49.93" r="16"/>
                                <path d="M97.54,49.93h0a7.22,7.22,0,0,0-7-7.21l-4.74-.17A3.56,
                                3.56,0,0,1,82.55,40,33.78,33.78,0,0,0,80,33.92a3.57,3.57,0,0,
                                1,.55-4.11l3.24-3.48a7.22,7.22,0,0,0-.18-10h0a7.22,7.22,0,0,
                                0-10-.18l-3.48,3.24a3.57,3.57,0,0,1-4.11.55,33.78,33.78,0,0,
                                0-6.12-2.54,3.56,3.56,0,0,1-2.51-3.29l-.17-4.74a7.22,7.22,0,0,
                                0-7.21-7h0a7.22,7.22,0,0,0-7.21,7l-.17,4.74a3.56,3.56,0,0,
                                1-2.51,3.29A33.78,33.78,0,0,0,34,19.92a3.57,3.57,0,0,
                                1-4.11-.55L26.4,16.14a7.22,7.22,0,0,0-10,.18h0a7.22,7.22,0,0,
                                0-.18,10l3.24,3.48A3.57,3.57,0,0,1,20,33.92,33.77,33.77,0,0,0,
                                17.45,40a3.56,3.56,0,0,1-3.29,2.51l-4.74.17a7.22,7.22,0,0,0-7,
                                7.21h0a7.22,7.22,0,0,0,7,7.21l4.74.17a3.56,3.56,0,0,1,3.29,
                                2.51A33.76,33.76,0,0,0,20,65.94a3.57,3.57,0,0,1-.55,4.11L16.2,
                                73.53a7.22,7.22,0,0,0,.18,10h0a7.22,7.22,0,0,0,10,
                                .18l3.48-3.24A3.57,3.57,0,0,1,34,79.94a33.76,33.76,0,0,0,6.12,
                                2.54,3.56,3.56,0,0,1,2.51,3.29l.17,4.74a7.22,7.22,0,0,0,7.21,
                                7h0a7.22,7.22,0,0,0,7.21-7l.17-4.74a3.56,3.56,0,0,1,
                                2.51-3.29A33.77,33.77,0,0,0,66,79.94a3.57,3.57,0,0,1,
                                4.11.55l3.48,3.24a7.22,7.22,0,0,0,10-.18h0a7.22,7.22,0,0,0,
                                .18-10l-3.24-3.48A3.57,3.57,0,0,1,80,65.94a33.77,33.77,0,0,0,
                                2.54-6.12,3.56,3.56,0,0,1,3.29-2.51l4.74-.17A7.22,7.22,0,0,0,
                                97.54,49.93Z"/>
                            </svg>
                            <p class="nav-title">Settings</p>
                        </div>
                    </a>
                    <a class="nav-link" id="userprofile--btn">
                        <div id="nav-profile" class="nav-button">
                            <svg class="svgIcon" width="20" height="20" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="47.48"/>
                                <path d="M80.41,86.45,80,81.38C79,70.87,73.19,62.32,62.76,
                                60.66h0a4.85,4.85,0,0,1-4.09-4.79h0c0-2.55,1.46-4.65,3.27-6.45,
                                2.17-2.16,5.15-9.1,4.29-15.38a16.36,16.36,0,0,0-32.55,2.29c0,
                                5.3,2.09,10.57,4.34,13,1.77,1.9,3.38,3.94,3.38,6.53h0a4.85,4.85,
                                0,0,1-4.09,4.79h0C26.82,62.32,21,70.88,20,81.41l-.44,5.05"/>
                            </svg>
                            <p class="nav-title">Profile</p>
                        </div>
                    </a>
                </div>
                <!-- PROFILE ACTIONS BAR - END -->
                <!-- NOTIFCATIONS ACTIONS BAR - START -->
                <div id="actions-bar--notif" class="action--hidden">
                    <div id="notif-actions-section">
                        <div class="nav-container">
                            <a href="notif.html" class="notif-action notif-action--pri">See all</a>
                            <a class="notif-action notif-action--sec">Clear all</a>
                        </div>
                    </div>
                    <div id="notif-bar" class="nav-container">
                        <div class="notif notif--friend">
                            <div class="notif__close"></div>
                            <div class="notif__info">
                                <div class="notif__info__pic"></div>
                                <div class="notif__info__desc">
                                    <div class="notif__info__desc__action"><a>Andy Dwyer</a> wants to be your friend!</div>
                                    <div class="notif__info__desc__time">Just now</div>
                                </div>
                            </div>
                            <div class="notif__actions">
                                <div class="notif__actions__btn notif__actions__btn--pri">Accept</div>
                                <div class="notif__actions__btn">Ignore</div>
                            </div>
                        </div>
                        <div class="notif notif--challenge">
                            <div class="notif__close"></div>
                            <div class="notif__info">
                                <div class="notif__info__pic"></div>
                                <div class="notif__info__desc">
                                    <div class="notif__info__desc__action"><a>Richard Lewis</a> challenges you to a <a>Curb Your Enthusiasm</a> binge!</div>
                                    <div class="notif__info__desc__time">3 minutes ago</div>
                                </div>
                            </div>
                            <div class="notif__actions">
                                <div class="notif__actions__btn notif__actions__btn--pri">Accept</div>
                                <div class="notif__actions__btn">Deny</div>
                            </div>
                        </div>
                        <div class="notif notif--trophy">
                            <div class="notif__close"></div>
                            <div class="notif__info">
                                <div class="notif__info__pic"></div>
                                <div class="notif__info__desc">
                                    <div class="notif__info__desc__action">Congratulations! You received the <a>Novice Binger</a> trophy!</div>
                                    <div class="notif__info__desc__time">20 minutes ago</div>
                                </div>
                            </div>
                            <div class="notif__actions">
                                <div class="notif__actions__btn notif__actions__btn--pri">View Trophies</div>
                            </div>
                        </div>
                        <div class="notif notif--recommend">
                            <div class="notif__close"></div>
                            <div class="notif__info">
                                <div class="notif__info__pic"></div>
                                <div class="notif__info__desc">
                                    <div class="notif__info__desc__action"><a>Rebecca Bunch</a> recommended you watch <a>Crazy Ex-Girlfriend</a>!</div>
                                    <div class="notif__info__desc__time">2 hours ago</div>
                                </div>
                            </div>
                            <div class="notif__actions">
                                <div class="notif__actions__btn notif__actions__btn--pri">Add to Watchlist</div>
                                <div class="notif__actions__btn">Ignore</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- NOTIFCATIONS ACTIONS BAR - END -->
                <!-- SEARCH ACTIONS BAR - START -->
                <div id="actions-bar--search" class="action--hidden nav-container">
                    <form id="searchform">
                        <div class="search-top">
                            <input id="searchbar" type="search" name="search" placeholder="Search..." autocomplete="off" oninput="searchBar();">
                            <div class="submit-button">
                                <svg class="submitIcon" width="25" height="25" viewBox="0 0 100 100">
                                    <circle cx="45" cy="45" r="34.43"/>
                                    <line x1="69.35" y1="69.35" x2="89.4" y2="89.4"/>
                                </svg>
                                <input id="search-submit" type="submit" value="Submit">
                            </div>
                        </div>
                        <ul class="search-bottom search-bottom--no-search">
                        </ul>
                    </form>
                </div>
                <!-- SEARCH ACTIONS BAR - END -->
            </nav>
            <nav id="secondary">
                <div class="middle">
                    <a class="nav-link" href="../upcoming.php"><!-- <a class="nav-link" href="http://webdev.joshuapensky.com/upcoming"> -->
                        <div id="nav-upcoming" class="nav-button">
                            <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                                <rect x="10.71" y="10.98" width="78.57" height="78.57" rx="2.22"
                                ry="2.22"/>
                                <line x1="10.71" y1="34.98" x2="89.29" y2="34.98"/>
                                <line x1="29.21" y1="2.51" x2="29.21" y2="19.44"/>
                                <line x1="70.79" y1="2.51" x2="70.79" y2="19.44"/>
                                <polyline points="45.36 50.52 51.84 50.52 51.84 72.73"/>
                            </svg>
                            <p class="nav-title">Upcoming</p>
                        </div>
                    </a>
                    <a class="nav-link">
                        <div id="nav-trending" class="nav-button">
                            <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                                <polyline points="2.87 82.13 29.25 52.67 51.79 71.37 97.13 17.87"/>
                                <polygon class="svgFill" points="77.21 20.91 97.13 17.87 95.61 37.8 77.21 20.91"/>
                            </svg>
                            <p class="nav-title fullwidth-svg">Trending</p>
                        </div>
                    </a>
                    <a class="nav-link" href="../watchlist.php"><!-- <a class="nav-link" href="http://webdev.joshuapensky.com/watchlist"> -->
                        <div id="nav-watchlist" class="nav-button">
                            <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                                <rect x="2.49" y="28.5" width="94.99" height="65.53" rx="2.22" ry="2.22"/>
                                <line x1="11.99" y1="17.24" x2="87.98" y2="17.24"/>
                                <line x1="20.6" y1="5.97" x2="79.37" y2="5.97"/>
                                <polygon points="64.98 61.22 40.54 45.27 40.54 77.18 64.98 61.22"/>
                            </svg>
                            <p class="nav-title fullwidth-svg">Watchlist</p>
                        </div>
                    </a>
                    <a class="nav-link">
                        <div id="nav-recommend" class="nav-button">
                            <svg class="svgIcon" width="25" height="25" viewBox="0 0 100 100">
                                <path d="M8,45.53V92.05a4.34,4.34,0,0,0,4.34,4.34H87.76a4.34,4.34,0,
                                0,0,4.34-4.34V45.53"/>
                                <polyline points="40.88 45.53 40.88 95.64 59.24 95.64 59.24 45.53"/>
                                <line x1="66.1" y1="45.53" x2="66.1" y2="20.19"/>
                                <line x1="34.02" y1="20.19" x2="34.02" y2="45.53"/>
                                <path d="M4.84,20.19H95.29a2.16,2.16,0,0,1,2.16,2.16V45.53a0,0,0,0,
                                1,0,0H2.68a0,0,0,0,1,0,0V22.35A2.16,2.16,0,0,1,4.84,20.19Z"/>
                                <path d="M78.7,20.19a10.15,10.15,0,0,0-15-13.61L50.06,20.19,36.46,
                                6.58A10.15,10.15,0,0,0,21.41,20.17"/>
                            </svg>
                            <p class="nav-title">For You</p>
                        </div>
                    </a>
                </div>
            </nav>
        </div>
    </body>
</html>
