<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
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
                    <div class="featured-cta">Catch up now</div>
                </div>
                <div class="featured-cover"></div>
            </div>
        </div>
        <div class="content">
            <div class="section coming-soon">
                <div class="section-header">
                    <a href="upcoming.php"><h2 class="section-header-type">Today</h2></a>
                    <!--<div class="section-header-seeall" onclick="seeAll(this, 'watchlist');">See All</div>-->
                </div>
                <ul class="upcoming">
                    <!--<li class="show">
                        <a class="show-cover" style="background-image:url('http://is3.mzstatic.com/image/thumb/Music71/v4/ac/f5/45/acf5452f-9116-d77f-10c2-6344b402f810/source/600x600bb.jpg')"></a>
                        <div class="show--top-info">
                            <div class="show-episode--type show-episode--type--empty"></div>
                            <p class="show-episode--title">Dangerous Laisons</p>
                        </div>
                        <div class="show--bottom-info">
                            <div class="show-episode--id">S05E19</div>
                            <p class="show-title">Arrow</p>
                        </div>
                        <div class="show--time-info">
                            <div class="show-time">8:00 PM</div>
                            <div class="show-service">
                                <img src="/img/services/The CW.png" />
                            </div>
                        </div>
                    </li>
                    <li class="show">
                        <a href="shows/fargo.php" class="show-cover" style="background-image:url('http://is4.mzstatic.com/image/thumb/Music122/v4/b2/d0/ce/b2d0ce19-7fc2-8003-a897-b5cdfad1a9e0/source/600x600bb.jpg')"></a>
                        <div class="show--top-info">
                            <div class="show-episode--type show-episode--type--empty"></div>
                            <p class="show-episode--title">The Principle of Restricted Choice</p>
                        </div>
                        <div class="show--bottom-info">
                            <div class="show-episode--id">S03E02</div>
                            <p class="show-title">Fargo</p>
                        </div>
                        <div class="show--time-info">
                            <div class="show-time">10:00 PM</div>
                            <div class="show-service">
                                <img src="/img/services/FX.png" />
                            </div>
                        </div>
                    </li>
                    <li class="show">
                        <a class="show-cover" style="background-image:url('http://is5.mzstatic.com/image/thumb/Music62/v4/f9/7d/6c/f97d6cd6-0bed-856e-27b9-47984af02d2c/source/600x600bb.jpg')"></a>
                        <div class="show--top-info">
                            <div class="show-episode--type show-episode--type--empty"></div>
                            <p class="show-episode--title">Lazarus</p>
                        </div>
                        <div class="show--bottom-info">
                            <div class="show-episode--id">S01E18</div>
                            <p class="show-title">Designated Survivor</p>
                        </div>
                        <div class="show--time-info">
                            <div class="show-time">10:00 PM</div>
                            <div class="show-service">
                                <img src="/img/services/ABC.png" />
                            </div>
                        </div>
                    </li>-->
                </ul>
            </div>
            <div class="section currently-watching shows">
                <div class="section-header">
                    <a href="watchlist.php"><h2 class="section-header-type">Currently Watching</h2></a>
                    <!--<div class="section-header-seeall" onclick="seeAll(this, 'watchlist');">See All</div>-->
                </div>
                <ul class="watchlist">
                </ul>
            </div>

        </div>
        <?php include 'includes/footer.php'; ?>
    </body>
</html>
