<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/fonts.css">
        <link rel="stylesheet" type="text/css" href="/css/home.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/data.js"></script>
        <script type="text/javascript" src="/js/watchlist.js"></script>
        <script type="text/javascript" src="/js/home.js"></script>
    </head>
    <body>
        <?php include 'includes/nav.php'; ?>
        <div class="featured">
            <div class="featured-title">Featured</div>
            <div class="featured-wrapper">

                <div class="featured-text">
                    <div class="featured-header">The Leftovers</div>
                    <div class="featured-description">After two near-perfect seasons, The Leftovers is coming to a close, with its third and final season premiering this Sunday.</div>
                    <a href="shows/the_leftovers.php" class="featured-cta">Catch up now</a>
                </div>
                <a href="shows/the_leftovers.php" class="featured-cover"></a>
            </div>
        </div>
        <div class="content">
            <div class="section coming-soon">
                <div class="section-header">
                    <a href="upcoming.php"><h2 class="section-header-type">Today</h2></a>
                    <!--<div class="section-header-seeall" onclick="seeAll(this, 'watchlist');">See All</div>-->
                </div>
                <ul class="upcoming"></ul>
            </div>
            <div class="section currently-watching shows">
                <div class="section-header">
                    <a href="watchlist.php"><h2 class="section-header-type">Currently Watching</h2></a>
                    <!--<div class="section-header-seeall" onclick="seeAll(this, 'watchlist');">See All</div>-->
                </div>
                <ul class="watchlist"></ul>
            </div>

        </div>
        <?php include 'includes/footer.php'; ?>
    </body>
</html>
