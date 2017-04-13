<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Upcoming - watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/upcoming.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/selector.js"></script>
    </head>
    <body>
        <?php include 'includes/nav.php'; ?>
        <div class="content">
            <h1>Watchlist</h1>
            <div class="media-sel">
                <ul class="media-sel-cont">
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Last Week</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Yesterday</div>
                    </li>
                    <li class="media-sel-item media-sel-item--selected" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Today</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Tomorrow</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">This Week</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Later</div>
                    </li>
                </ul>
            </div>
            <div class="last-week profile-section profile-section--hidden profile-section--invis">
                <h1>Last Week</h1>
            </div>
            <div class="yesterday profile-section profile-section--hidden profile-section--invis">
                <h1>Yesterday</h1>
            </div>
            <div class="today profile-section">
                <h1>Today</h1>
            </div>
            <div class="tomorrow profile-section profile-section--hidden profile-section--invis">
                <h1>Tomorrow</h1>
            </div>
            <div class="this-week profile-section profile-section--hidden profile-section--invis">
                <h1>This Week</h1>
            </div>
            <div class="later profile-section profile-section--hidden profile-section--invis">
                <h1>Later</h1>
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
