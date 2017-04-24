<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Watchlist - watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/fonts.css">
        <link rel="stylesheet" type="text/css" href="/css/watchlist.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/data.js"></script>
        <script type="text/javascript" src="/js/watchlist.js"></script>
        <script type="text/javascript" src="/js/selector.js"></script>
    </head>
    <body>
        <?php include 'includes/nav.php'; ?>
        <div class="content">
            <h1>Watchlist</h1>
            <div class="media-sel">
                <ul class="media-sel-cont">
                    <li class="media-sel-item media-sel-item--selected" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Shows</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Movies</div>
                    </li>
                </ul>
            </div>
            <div class="shows profile-section">
                <ul class="friends-watching">
                    <li class="friends-item">
                        <div class="friends-item-img">
                            <a class="friends-item-img--show" id="breaking-bad"></a>
                            <a href="/users/liliakang.php" class="friends-item-img--profile" id="lilia"></a>
                        </div>
                        <div class="friends-item-info">
                            <div class="friends-item-info--desc">
                                <a href="/users/liliakang.php">Lilia</a> binged 3 episodes of <span>Breaking Bad</span>.</div>
                            <div class="friends-item-info--quantity">S05E14 - S05E16</div>
                            <div class="friends-item-info--time">Just now</div>
                        </div>
                    </li>
                    <li class="friends-item">
                        <div class="friends-item-img">
                            <div class="friends-item-img--show" id="superstore"></div>
                            <a href="/users/djtannertanner.php" class="friends-item-img--profile" id="tanner"></a>
                        </div>
                        <div class="friends-item-info">
                            <div class="friends-item-info--desc">
                                <a href="/users/djtannertanner.php">Tanner</a> watched an episode of <span>Superstore</span>.</div>
                            <div class="friends-item-info--quantity">S02E18</div>
                            <div class="friends-item-info--time">24 minutes ago</div>
                        </div>
                    </li>
                    <li class="friends-item">
                        <div class="friends-item-img">
                            <div class="friends-item-img--show" id="always-sunny"></div>
                            <a href="/users/mike_hom.php" class="friends-item-img--profile" id="mike"></a>
                        </div>
                        <div class="friends-item-info">
                            <div class="friends-item-info--desc">
                                <a href="/users/mike_hom.php">Mike</a> binged 2 seasons of <span>It's Always Sunny in Philadelphia</span>.</div>
                            <div class="friends-item-info--quantity">S02 - S04</div>
                            <div class="friends-item-info--time">3 hours ago</div>
                        </div>
                    </li>
                    <li class="friends-item">
                        <div class="friends-item-img">
                            <div class="friends-item-img--show" id="legion"></div>
                            <div class="friends-item-img--profile" id="jess"></div>
                        </div>
                        <div class="friends-item-info">
                            <div class="friends-item-info--desc">
                                <span>Jess</span> binged all of <span>Legion</span>.</div>
                            <div class="friends-item-info--quantity">S01</div>
                            <div class="friends-item-info--time">1 day ago</div>
                        </div>
                    </li>
                    <li class="friends-item">
                        <div class="friends-item-img">
                            <div class="friends-item-img--show" id="heroes"></div>
                            <div class="friends-item-img--profile" id="maryann"></div>
                        </div>
                        <div class="friends-item-info">
                            <div class="friends-item-info--desc">
                                <span>Maryann</span> binged 10 episodes of <span>Heroes</span>.</div>
                            <div class="friends-item-info--quantity">S01E07 - S01E16</div>
                            <div class="friends-item-info--time">1 day ago</div>
                        </div>
                    </li>
                    <li class="friends-item">
                        <div class="friends-item-img">
                            <div class="friends-item-img--show" id="curb-your-enthusiasm"></div>
                            <div class="friends-item-img--profile" id="eric"></div>
                        </div>
                        <div class="friends-item-info">
                            <div class="friends-item-info--desc">
                                <span>Eric</span> binged 3 seasons of <span>Curb Your Enthusiasm</span>.</div>
                            <div class="friends-item-info--quantity">S01 - S03</div>
                            <div class="friends-item-info--time">2 days ago</div>
                        </div>
                    </li>
                </ul>
                <ul class="watchlist"></ul>
            </div>
            <div class="movies profile-section profile-section--hidden profile-section--invis">
                <ul class="watchlist">
                    <li class="movie">
                        <div class="movie-cover" id="logan"></div>
                        <div class="movie-progress">
                            <div class="movie-progress--bar"></div>
                        </div>
                        <p class="movie-title">Logan</p>
                        <div class="movie-button movie-button--mark-cont">
                            <div class="movie-button--mark"></div>
                            <p>Mark as Watched</p>
                        </div>
                        <div class="movie-button movie-button--watch-cont">
                            <div class="movie-button--watch"></div>
                            <p>Watch Now</p>
                        </div>
                    </li>
                    <li class="movie">
                        <div class="movie-cover" id="moana"></div>
                        <div class="movie-progress">
                            <div class="movie-progress--bar"></div>
                        </div>
                        <p class="movie-title">Moana</p>
                        <div class="movie-button movie-button--mark-cont">
                            <div class="movie-button--mark"></div>
                            <p>Mark as Watched</p>
                        </div>
                        <div class="movie-button movie-button--watch-cont">
                            <div class="movie-button--watch"></div>
                            <p>Watch Now</p>
                        </div>
                    </li>
                    <li class="movie">
                        <div class="movie-cover" id="what-we-do"></div>
                        <div class="movie-progress">
                            <div class="movie-progress--bar"></div>
                        </div>
                        <p class="movie-title">What We Do in the Shadows</p>
                        <div class="movie-button movie-button--mark-cont">
                            <div class="movie-button--mark"></div>
                            <p>Mark as Watched</p>
                        </div>
                        <div class="movie-button movie-button--watch-cont">
                            <div class="movie-button--watch"></div>
                            <p>Watch Now</p>
                        </div>
                    </li>
                    <li class="movie">
                        <div class="movie-cover" id="wilderpeople"></div>
                        <div class="movie-progress">
                            <div class="movie-progress--bar"></div>
                        </div>
                        <p class="movie-title">Hunt for the Wilderpeople</p>
                        <div class="movie-button movie-button--mark-cont">
                            <div class="movie-button--mark"></div>
                            <p>Mark as Watched</p>
                        </div>
                        <div class="movie-button movie-button--watch-cont">
                            <div class="movie-button--watch"></div>
                            <p>Watch Now</p>
                        </div>
                    </li>
                    <li class="movie">
                        <div class="movie-cover" id="suicide-squad"></div>
                        <div class="movie-progress">
                            <div class="movie-progress--bar"></div>
                        </div>
                        <p class="movie-title">Suicide Squad</p>
                        <div class="movie-button movie-button--mark-cont">
                            <div class="movie-button--mark"></div>
                            <p>Mark as Watched</p>
                        </div>
                        <div class="movie-button movie-button--watch-cont">
                            <div class="movie-button--watch"></div>
                            <p>Watch Now</p>
                        </div>
                    </li>
                    <li class="movie">
                        <div class="movie-cover" id="they-came-together"></div>
                        <div class="movie-progress">
                            <div class="movie-progress--bar"></div>
                        </div>
                        <p class="movie-title">They Came Together</p>
                        <div class="movie-button movie-button--mark-cont">
                            <div class="movie-button--mark"></div>
                            <p>Mark as Watched</p>
                        </div>
                        <div class="movie-button movie-button--watch-cont">
                            <div class="movie-button--watch"></div>
                            <p>Watch Now</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cta-section">
            <h4 class="cta-section--type">Out of shows to watch?</h4>
            <div class="cta-section--btn">
                <svg class="cta-section--btn--icon" width="20" height="20" viewBox="0 0 100 100">
                    <circle cx="45" cy="45" r="34.43"/>
                    <line x1="69.35" y1="69.35" x2="89.4" y2="89.4"/>
                </svg>
                <h4 class="cta-section--btn--type">Let's find more</h4>
            </div>
        </div>
        <?php include 'includes/footer.php'; ?>
    </body>
</html>
