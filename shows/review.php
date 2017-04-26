<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/fonts.css">
        <link rel="stylesheet" type="text/css" href="/css/show.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/data.js"></script>
        <script type="text/javascript" src="/js/show.js"></script>
        <script type="text/javascript" src="/js/selector.js"></script>
        <script type="text/javascript" src="/js/modal.js"></script>
    </head>
    <body>
        <?php include '../includes/nav.php'; ?>
        <div class="modal modal-remove modal--hidden modal-remove--show">
            <div class="modal-close"></div>
            <div class="modal-img"></div>
            <h2 class="modal-header">Remove Fargo from your Watchlist?</h2>
            <p class="modal-body">You will lose all progress you currently have on this show.</p>
            <div class="modal-btns">
                <div class="modal-btn modal-btn-secondary">Yes</div>
                <div class="modal-btn modal-btn-primary">No</div>
            </div>
        </div>
        <div class="dark-cover dark-cover--hidden"></div>
        <div class="content">
            <div class="hero">
                <div class="show-header">
                    <div class="show-header-cover"></div>
                    <div class="show-header-progress">
                        <div class="show-header-progress-bar"></div>
                    </div>
                    <div class="show-header-info">
                        <h1 class="show-header-info-title"></h1>
                        <h4 class="show-header-info-year"></h4>
                        <div class="show-header-info-btn" onclick="addShow(this);">
                            <div class="show-header-info-btn-img"></div>
                            <p class="show-header-info-btn-type">Add to Watchlist</p>
                        </div>
                        <div class="show-header-info-btn show-header-rmv-btn">
                            <div class="show-header-info-btn-img"></div>
                            <p class="show-header-info-btn-type">Remove Show</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section about">
                <ul class="about-genres"></ul>
                <div class="about-details"></div>
                <p class="about-description"></p>
                <div class="about-streaming">
                    <p class="about-streaming-title">Streaming now on</p>
                    <ul class="about-streaming-servies"></ul>
                </div>
                <div class="section-header" id="friends-watching">
                    <h3 class="section-header-type">Friends Who Watch</h3>
                    <div class="section-header-seeall section-header-seeall--small" onclick="seeAll(this, 'friends-watching-list');">See All</div>
                </div>
                <ul class="list friends-watching-list"></ul>
            </div>
            <div class="section" id="seasons">
                <div class="section-header">
                    <h2 class="section-header-type">Seasons</h2>
                </div>
            </div>
            <div class="section">
                <div class="section-header">
                    <h2 class="section-header-type">Cast</h2>
                    <div class="section-header-seeall" onclick="seeAll(this, 'cast-list');">See All</div>
                </div>
                <ul class="list cast-list"></ul>
            </div>
            <div class="section">
                <div class="section-header">
                    <h2 class="section-header-type">Reviews</h2>
                    <!--<div class="section-header-seeall">See All</div>-->
                </div>
                <ul class="review-list">
                    <li class="review-item">
                        <div class="review-item-leftside">
                            <div class="review-item-leftside-img" id="lilia"></div>
                            <div class="review-item-leftside-user">Lilia Kang</div>
                            <div class="review-item-leftside-rank">Binge Master</div>
                        </div>
                        <div class="review-item-rightside">
                            <ul class="review-item-rightside-stars">
                                <li class="star star--full--user"></li>
                                <li class="star star--full--user"></li>
                                <li class="star star--full--user"></li>
                                <li class="star star--full--user"></li>
                                <li class="star star--full--user"></li>
                            </ul>
                            <div class="review-item-rightside-title">Brilliant. Just Brilliant.</div>
                            <div class="review-item-rightside-review">From the very start, from the opening shot of the cold dark icy road and the background music starting to play, I knew this would be something different, something awesome.</br>Coming from someone who hasn't watched the 1996 film by the Coen brothers, I really didn't know what to expect. I was in a way wondering if I was just wasting my time and watching a series that would fall short of everyone's expectations and just flop, like so many other TV series do nowadays. However, that didn't happen at all.</br>The performances were outstanding in my opinion. Martin Freeman was excellent and to my surprise did the accent fairly well. Billy Bob Thornton was amazing as Lorne Malvo, the enigmatic vibe you get from his performance gave me chills.</br>The cinematography is also one of the good things about this pilot. The shots are smart and intriguing, yet still simple and not too overdone. The music is also outstanding. There are times when it is quirky and funny, there are times where it is tragic and sad yet epic, and then there are also the times when it is intense and mysterious.</br>Fargo is mysterious, intense, funny (at times), tragic and just simply plain awesome! I really hope there are more to come like this.
                            </div>
                            <div class="review-item-rightside-readmore">Read more</div>
                        </div>
                    </li>
                    <li class="review-item">
                        <div class="review-item-leftside">
                            <div class="review-item-leftside-img" id="ben"></div>
                            <div class="review-item-leftside-user">Ben Brik</div>
                            <div class="review-item-leftside-rank">Netflix Addict</div>
                        </div>
                        <div class="review-item-rightside">
                            <ul class="review-item-rightside-stars">
                                <li class="star star--full--user"></li>
                                <li class="star star--full--user"></li>
                                <li class="star star--full--user"></li>
                                <li class="star star--full--user"></li>
                                <li class="star star--half--user"></li>
                            </ul>
                            <div class="review-item-rightside-title">I've found a gem!</div>
                            <div class="review-item-rightside-review">After watching more recent offspring of the new "One hour movie" esq shows, ushered in by Breaking Bad, I was expecting a pretentious, exuberantly high budgeted, slow and pandering television show trying to feed off the Breaking Bad withdrawn audience. After watching the first episode of Fargo I was very surprised. </br>The first episode's last 20 minutes left me with anxious tingles down my spine. The mix between light hearted comedy and darkness provided by the interactions of the extras with Billy Bob Thornton and Martin Freeman. Without revealing anything about the plot I can safely say I will remember the interaction between Officer Grimly and Malvo for the rest of my life.</br>Also the cinematic quality of this series will be second to none as the placement of the camera in certain scenes truly adds to the comedic or dark value of the scenes.
                            </div>
                            <div class="review-item-rightside-readmore">Read more</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <?php include '../includes/footer.php'; ?>
    </body>
</html>
