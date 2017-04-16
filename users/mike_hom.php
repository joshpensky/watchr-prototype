<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/profile.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/selector.js"></script>
        <script type="text/javascript" src="/js/profile.js"></script>
        <script type="text/javascript" src="/js/modal.js"></script>
    </head>
    <body>
        <?php include '../includes/nav.php'; ?>
        <div class="modal modal-remove modal--hidden modal-remove--show">
            <div class="modal-close" onclick="remModal(false, 'modal-remove--show', '');"></div>
            <div class="modal-img"></div>
            <h2 class="modal-header"></h2>
            <p class="modal-body"></p>
            <div class="modal-btns">
                <div class="modal-btn modal-btn-secondary" onclick="remModal(false, 'modal-remove--show', '');">Yes</div>
                <div class="modal-btn modal-btn-primary" onclick="remModal(false, 'modal-remove--show', '');">No</div>
            </div>
        </div>
        <div class="modal modal-remove modal--hidden modal-remove--friend">
            <div class="modal-close" onclick="remModal(false, 'modal-remove--friend', 'Mike');"></div>
            <div class="modal-img"></div>
            <h2 class="modal-header"></h2>
            <p class="modal-body"></p>
            <div class="modal-btns">
                <div class="modal-btn modal-btn-secondary" onclick="remModal(false, 'modal-remove--friend', 'Mike');">Yes</div>
                <div class="modal-btn modal-btn-primary" onclick="remModal(false, 'modal-remove--friend', 'Mike');">No</div>
            </div>
        </div>
        <div class="dark-cover dark-cover--hidden"></div>
        <div class="content">
            <div class="hero">
                <div class="profile-header">
                    <div class="profile-header-img"></div>
                </div>
            </div>
            <ul class="profile-actions-list">

            </ul>
            <div class="section header">
                <div class="header-info">
                    <h1 class="header-info-name"></h1>
                    <div class="header-info-rank">
                        <div class="header-info-rank-img"></div>
                        <div class="header-info-rank-type"></div>
                    </div>
                </div>
                <p class="header-desc"></p>
            </div>
            <div class="media-sel">
                <ul class="media-sel-cont">
                    <li class="media-sel-item media-sel-item--selected" onclick="changeSection(this);">
                        <div class="media-sel-item-title">About</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Shows</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Movies</div>
                    </li>
                </ul>
            </div>
            <div class="about profile-section">
                <div class="section experience">
                    <div class="section-header">
                        <h2 class="section-header-type">Experience</h2>
                    </div>
                    <div class="experience-show">
                        <div class="experience-show--years">0 <span>years</span></div>
                        <div class="experience-show--months">0 <span>month</span></div>
                        <div class="experience-show--days">0 <span>days</span></div>
                        <div class="experience-show--hours">0 <span>hours</span></div>
                    </div>
                    <div class="experience-movie">
                        <div class="experience-movie--years">0 <span>years</span></div>
                        <div class="experience-movie--months">0 <span>months</span></div>
                        <div class="experience-movie--days">0 <span>days</span></div>
                        <div class="experience-movie--hours">0 <span>hours</span></div>
                    </div>
                </div>
                <div class="section genres">
                    <div class="section-header">
                        <h2 class="section-header-type">Genres</h2>
                    </div>
                    <ul class="genre-list">
                    </ul>
                </div>
                <div class="section friends">
                    <div class="section-header">
                        <h2 class="section-header-type">Friends</h2>
                        <h2 class="section-header-type--sub">(<span>0</span>)</h2>
                        <div class="section-header-seeall" onclick="seeAll(this, 'friend-list');">See All</div>
                    </div>
                    <ul class="friend-list"></ul>
                </div>
            </div>
            <div class="shows profile-section profile-section--hidden profile-section--invis">
                <div class="section favorites">
                    <div class="section-header">
                        <h2 class="section-header-type">Favorite Shows</h2>
                    </div>
                    <ul class="show-list">
                    </ul>
                </div>
                <div class="section all">
                    <div class="section-header">
                        <h2 class="section-header-type">All Shows</h2>
                        <h2 class="section-header-type--sub">(<span>0</span>)</h2>
                    </div>
                    <ul class="show-list">
                    </ul>
                </div>
            </div>
            <div class="movies profile-section profile-section--hidden profile-section--invis">
                <div class="section favorites">
                    <div class="section-header">
                        <h2 class="section-header-type">Favorite Movies</h2>
                    </div>
                    <ul class="movie-list">
                    </ul>
                </div>
                <div class="section all">
                    <div class="section-header">
                        <h2 class="section-header-type">All Movies</h2>
                        <h2 class="section-header-type--sub">(<span>0</span>)</h2>
                    </div>
                    <ul class="movie-list">
                    </ul>
                </div>
            </div>
        </div>
        <?php include '../includes/footer.php'; ?>
    </body>
</html>
