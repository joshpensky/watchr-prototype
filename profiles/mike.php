<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Mike Hom - watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/profile.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/show.js"></script>
        <script type="text/javascript" src="/js/selector.js"></script>
        <script type="text/javascript" src="/js/profile.js"></script>
    </head>
    <body>
        <?php include '../includes/nav.php'; ?>
        <div class="content">
            <div class="hero">
                <div class="profile-header">
                    <div class="profile-header-img" id="mike"></div>
                </div>
            </div>
            <ul class="profile-actions-list">
                <li class="profile-actions-item profile-actions-item--challenge profile-actions-item--icononly">Challenge</li>
                <li class="profile-actions-item profile-actions-item--recommend profile-actions-item--icononly">Recommend</li>
                <li class="profile-actions-item profile-actions-item--friends">Friends</li>
            </ul>
            <div class="section header">
                <div class="header-info">
                    <h1 class="header-info-name">Mike Hom</h1>
                    <div class="header-info-rank">
                        <div class="header-info-rank-img"></div>
                        <div class="header-info-rank-type">Lorem Ipsum</div>
                    </div>
                </div>
                <p class="header-desc">Lorem Ipsum</p>
            </div>
            <div class="media-sel">
                <ul class="media-sel-cont">
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">About</div>
                    </li>
                    <li class="media-sel-item media-sel-item--selected" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Shows</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Movies</div>
                    </li>
                </ul>
            </div>
            <div class="about profile-section profile-section--hidden profile-section--invis">
                <div class="section experience">
                    <div class="section-header">
                        <h2 class="section-header-type">Experience</h2>
                    </div>
                    <div class="experience-show">
                        <div class="experience-show--years">NaN <span>years</span></div>
                        <div class="experience-show--months">NaN <span>month</span></div>
                        <div class="experience-show--days">NaN <span>days</span></div>
                        <div class="experience-show--hours">NaN <span>hours</span></div>
                    </div>
                    <div class="experience-movie">
                        <div class="experience-movie--years">NaN <span>years</span></div>
                        <div class="experience-movie--months">NaN <span>months</span></div>
                        <div class="experience-movie--days">NaN <span>days</span></div>
                        <div class="experience-movie--hours">NaN <span>hours</span></div>
                    </div>
                </div>
                <div class="section genres">
                    <div class="section-header">
                        <h2 class="section-header-type">Genres</h2>
                    </div>
                    <ul class="genre-list">
                        <li class="genre-item">
                            <div class="genre-item-img" style="background-image: url('/img/genres/fantasy-big.png');"></div>
                            <div class="genre-item-type">Fantasy</div>
                        </li>
                        <li class="genre-item">
                            <div class="genre-item-img" style="background-image: url('/img/genres/animation-big.png');"></div>
                            <div class="genre-item-type">Animation</div>
                        </li>
                        <li class="genre-item">
                            <div class="genre-item-img" style="background-image: url('/img/genres/comedy-big.png');"></div>
                            <div class="genre-item-type">Comedy</div>
                        </li>
                        <li class="genre-item">
                            <div class="genre-item-img" style="background-image: url('/img/genres/scifi-big.png');"></div>
                            <div class="genre-item-type">Sci-Fi</div>
                        </li>
                        <li class="genre-item">
                            <div class="genre-item-img" style="background-image: url('/img/genres/adventure-big.png');"></div>
                            <div class="genre-item-type">Adventure</div>
                        </li>
                        <li class="genre-item">
                            <div class="genre-item-img" style="background-image: url('/img/genres/drama-big.png');"></div>
                            <div class="genre-item-type">Drama</div>
                        </li>
                    </ul>
                </div>
                <div class="section friends">
                    <div class="section-header">
                        <h2 class="section-header-type">Friends</h2>
                        <h2 class="section-header-type--sub">(<span>NaN</span>)</h2>
                        <div class="section-header-seeall" onclick="seeAll(this, 'friend-list');">See All</div>
                    </div>
                    <ul class="friend-list"></ul>
                </div>
            </div>
            <div class="shows profile-section">
                <div class="section favorites">
                    <div class="section-header">
                        <h2 class="section-header-type">Favorite Shows</h2>
                    </div>
                    <ul class="show-list">
                        <!--<li class="show-item">
                            <div class="show-item-cover" style="background-image: url(http://is3.mzstatic.com/image/thumb/Music6/v4/09/aa/33/09aa3319-c1ce-2d91-a90b-1f706559e2ca/source/600x600bb.jpg);"></div>
                            <div class="show-item-progress show-item-progress--them">
                                <div class="show-item-progress-bar"></div>
                            </div>
                            <div class="show-item-progress show-item-progress--you">
                                <div class="show-item-progress-bar"></div>
                            </div>
                            <div class="show-item-title">Arrested Development</div>
                            <div class="show-item-btn show-item-btn--add-cont" onclick="addShow(this);">
                                <div class="show-item-btn--add"></div>
                                <p>Add to Watchlist</p>
                            </div>
                            <div class="show-item-btn show-item-btn--added-cont" onclick="addShow(this);">
                                <div class="show-item-btn--added"></div>
                                <p>In Watchlist</p>
                            </div>
                        </li>
                        <li class="show-item">
                            <div class="show-item-cover" style="background-image: url(http://is5.mzstatic.com/image/thumb/Music71/v4/f7/90/0b/f7900ba6-c694-229c-72b7-a688d58f6a9b/source/600x600bb.jpg);"></div>
                            <div class="show-item-progress show-item-progress--them">
                                <div class="show-item-progress-bar"></div>
                            </div>
                            <div class="show-item-progress show-item-progress--you">
                                <div class="show-item-progress-bar"></div>
                            </div>
                            <div class="show-item-title">The Flash</div>
                            <div class="show-item-btn show-item-btn--add-cont" onclick="addShow(this);">
                                <div class="show-item-btn--add"></div>
                                <p>Add to Watchlist</p>
                            </div>
                            <div class="show-item-btn show-item-btn--added-cont" onclick="addShow(this);">
                                <div class="show-item-btn--added"></div>
                                <p>In Watchlist</p>
                            </div>
                        </li>
                        <li class="show-item">
                            <div class="show-item-cover" style="background-image: url(http://is4.mzstatic.com/image/thumb/Music62/v4/bf/c9/e5/bfc9e51a-618d-ac01-439d-f1df5bca4099/source/600x600bb.jpg);"></div>
                            <div class="show-item-progress show-item-progress--them">
                                <div class="show-item-progress-bar"></div>
                            </div>
                            <div class="show-item-progress show-item-progress--you">
                                <div class="show-item-progress-bar"></div>
                            </div>
                            <div class="show-item-title">Young Justice</div>
                            <div class="show-item-btn show-item-btn--add-cont" onclick="addShow(this);">
                                <div class="show-item-btn--add"></div>
                                <p>Add to Watchlist</p>
                            </div>
                            <div class="show-item-btn show-item-btn--added-cont" onclick="addShow(this);">
                                <div class="show-item-btn--added"></div>
                                <p>In Watchlist</p>
                            </div>
                        </li>
                        <li class="show-item">
                            <div class="show-item-cover" style="background-image: url(http://is5.mzstatic.com/image/thumb/Music62/v4/ac/fc/48/acfc48d4-e839-100b-1b94-b164f809b4b7/source/600x600bb.jpg);"></div>
                            <div class="show-item-progress show-item-progress--them">
                                <div class="show-item-progress-bar"></div>
                            </div>
                            <div class="show-item-progress show-item-progress--you">
                                <div class="show-item-progress-bar"></div>
                            </div>
                            <div class="show-item-title">The Last Man on Earth</div>
                            <div class="show-item-btn show-item-btn--add-cont" onclick="addShow(this);">
                                <div class="show-item-btn--add"></div>
                                <p>Add to Watchlist</p>
                            </div>
                            <div class="show-item-btn show-item-btn--added-cont" onclick="addShow(this);">
                                <div class="show-item-btn--added"></div>
                                <p>In Watchlist</p>
                            </div>
                        </li>-->
                    </ul>
                </div>
                <div class="section all">
                    <div class="section-header">
                        <h2 class="section-header-type">All Shows</h2>
                    </div>
                </div>
            </div>
            <div class="movies profile-section profile-section--hidden profile-section--invis">
                <div class="section favorites">
                    <div class="section-header">
                        <h2 class="section-header-type">Favorite Movies</h2>
                    </div>
                </div>
                <div class="section all">
                    <div class="section-header">
                        <h2 class="section-header-type">All Movies</h2>
                    </div>
                </div>
            </div>
        </div>
        <?php include '../includes/footer.php'; ?>
    </body>
</html>
