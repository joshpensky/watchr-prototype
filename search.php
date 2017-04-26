<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/fonts.css">
        <link rel="stylesheet" type="text/css" href="/css/search.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/data.js"></script>
        <script type="text/javascript" src="/js/selector.js"></script>
    </head>
    <body>
        <?php include 'includes/nav.php'; ?>
        <div class="content">
            <h1>Search for <span></span></h1>
            <form id="searchform" onsubmit="searchResults(this); return false;">
                <div class="search-top">
                    <input id="searchbar" type="search" name="search" placeholder="Search..." autocomplete="off" oninput="searchBar();" autocorrect="off" autocapitalize="off" spellcheck="false">
                    <div class="submit-button">
                        <svg class="submitIcon" width="25" height="25" viewBox="0 0 100 100">
                            <circle cx="45" cy="45" r="34.43"/>
                            <line x1="69.35" y1="69.35" x2="89.4" y2="89.4"/>
                        </svg>
                        <input id="search-submit" type="submit" value="Submit" onsubmit="searchResults(this); return false;">
                    </div>
                </div>
            </form>
            <div class="media-sel">
                <ul class="media-sel-cont">
                    <li class="media-sel-item media-sel-item--selected" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Shows</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Movies</div>
                    </li>
                    <li class="media-sel-item" onclick="changeSection(this);">
                        <div class="media-sel-item-title">Users</div>
                    </li>
                </ul>
            </div>
            <div class="shows profile-section">
                <ul class="search-results"></ul>
            </div>
            <div class="movies profile-section profile-section--hidden profile-section--invis">
                <ul class="search-results"></ul>
            </div>
            <div class="users profile-section profile-section--hidden profile-section--invis">
                <ul class="search-results"></ul>
            </div>
        </div>
        <?php include 'includes/footer.php'; ?>
    </body>
</html>
