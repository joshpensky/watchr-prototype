<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Legion - watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/fonts.css">
        <link rel="stylesheet" type="text/css" href="/css/show.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/show.js"></script>
        <script type="text/javascript" src="/js/selector.js"></script>
        <!--<script type="text/javascript" src="/js/modal.js"></script>-->
    </head>
    <body>
        <?php include '../includes/nav.php'; ?>
        <div class="modal modal-remove modal--hidden">
            <div class="modal-close" onclick="remModal(false);"></div>
            <div class="modal-img"></div>
            <h2 class="modal-header">Remove Legion from your Watchlist?</h2>
            <p class="modal-body">You will lose all progress you currently have on this show.</p>
            <div class="modal-btns">
                <div class="modal-btn modal-btn-secondary" onclick="remShow(); remModal(false);">Yes</div>
                <div class="modal-btn modal-btn-primary" onclick="remModal(false);">No</div>
            </div>
        </div>
        <div class="dark-cover dark-cover--hidden"></div>
        <div class="content">
            <div class="hero" style="background-image:url(http://i.onionstatic.com/avclub/6232/79/16x9/2400.jpg);">
                <div class="show-header">
                    <div class="show-header-cover" id="legion"></div>
                    <div class="show-header-progress">
                        <div class="show-header-progress-bar"></div>
                    </div>
                    <div class="show-header-info">
                        <h1 class="show-header-info-title">Legion</h1>
                        <h4 class="show-header-info-year">2017 - Present</h4>
                        <div class="show-header-info-btn" onclick="addShow(this);">
                            <div class="show-header-info-btn-img"></div>
                            <p class="show-header-info-btn-type">Add to Watchlist</p>
                        </div>
                        <div class="show-header-info-btn show-header-rmv-btn" onclick="remModal(true);">
                            <div class="show-header-info-btn-img"></div>
                            <p class="show-header-info-btn-type">Remove Show</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section about">
                <ul class="about-genres">
                    <li class="about-genres-item">
                        <div class="about-genres-item-img" id="action"></div>
                        <div class="about-genres-item-type">Action</div>
                    </li>
                    <li class="about-genres-item">
                        <div class="about-genres-item-img" id="drama"></div>
                        <div class="about-genres-item-type">Drama</div>
                    </li>
                    <li class="about-genres-item">
                        <div class="about-genres-item-img" id="sci-fi"></div>
                        <div class="about-genres-item-type">Sci-Fi</div>
                    </li>
                </ul>
                <div class="about-details">
                    <p class="about-details-rating">TV-MA</p>
                    <p class="about-details-timing">1 hr</p>
                    <p class="about-details-seasons">1 Season</p>
                </div>
                <p class="about-description">David Haller is a troubled young man diagnosed as schizophrenic, but after a strange encounter, he discovers special powers that will change his life forever.</p>
                <div class="about-streaming">
                    <p class="about-streaming-title">Streaming now on</p>
                    <ul class="about-streaming-servies">
                        <li class="about-streaming-services-item">
                            <img src="/img/services/fxnow.png" />
                        </li>
                        <li class="about-streaming-services-item">
                            <img src="/img/services/hulu.png" />
                        </li>
                    </ul>
                </div>
                <div class="section-header">
                    <h3 class="section-header-type">Friends Who Watch</h3>
                    <div class="section-header-seeall section-header-seeall--small" onclick="seeAll(this, 'friends-watching-list');">See All</div>
                </div>
                <ul class="list friends-watching-list">
                    <li class="friends-watching-item">
                        <div class="friend-progress">
                            <svg class="friend-progress--circle friend-progress--circle--finished" width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="36.5"/>
                        		<circle class="prog" cx="40" cy="40" r="36.5"/>
                        	</svg>
                            <div class="friend-progress--pic" id="maryann"></div>
                        </div>
                        <p class="friends-watching-item--name">Maryann</p>
                        <p class="friends-watching-item--ep">Finished</p>
                    </li>
                    <li class="friends-watching-item">
                        <div class="friend-progress">
                            <svg class="friend-progress--circle friend-progress--circle--finished" width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="36.5"/>
                        		<circle class="prog" cx="40" cy="40" r="36.5"/>
                        	</svg>
                            <div class="friend-progress--pic" id="ray"></div>
                        </div>
                        <p class="friends-watching-item--name">Ray</p>
                        <p class="friends-watching-item--ep">Finished</p>
                    </li>
                    <li class="friends-watching-item">
                        <div class="friend-progress">
                            <svg class="friend-progress--circle friend-progress--circle--finished" width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="36.5"/>
                        		<circle class="prog" cx="40" cy="40" r="36.5"/>
                        	</svg>
                            <div class="friend-progress--pic" id="jess"></div>
                        </div>
                        <p class="friends-watching-item--name">Jess</p>
                        <p class="friends-watching-item--ep">Finished</p>
                    </li>
                    <li class="friends-watching-item">
                        <a href="/users/mike_hom.php">
                            <div class="friend-progress">
                                <svg class="friend-progress--circle" width="80" height="80" viewBox="0 0 80 80">
                                    <circle cx="40" cy="40" r="36.5"/>
                            		<circle class="prog" cx="40" cy="40" r="36.5"/>
                            	</svg>
                                <div class="friend-progress--pic" id="mike"></div>
                            </div>
                            <p class="friends-watching-item--name">Mike</p>
                        </a>
                        <p class="friends-watching-item--ep">S01E03</p>
                    </li>
                    <li class="friends-watching-item">
                        <div class="friend-progress">
                            <svg class="friend-progress--circle" width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="36.5"/>
                        		<circle class="prog" cx="40" cy="40" r="36.5"/>
                        	</svg>
                            <div class="friend-progress--pic" id="eric"></div>
                        </div>
                        <p class="friends-watching-item--name">Eric</p>
                        <p class="friends-watching-item--ep">Added</p>
                    </li>

                </ul>
            </div>
            <div class="section">
                <div class="section-header">
                    <h2 class="section-header-type">Seasons</h2>
                </div>
                <div class="media-sel">
                    <ul class="media-sel-cont">
                        <li class="media-sel-item media-sel-item--selected" onclick="changeSection(this);">
                            <div class="media-sel-item-title">Season 1</div>
                        </li>
                    </ul>
                </div>
                <div class="season-1 episodes-container profile-section">
                    <!--<div class="section-header">
                        <div class="section-header-seeall" onclick="seeAll(this, 'episode-list');">See All</div>
                    </div>-->
                    <ul class="list episode-list">
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/6200/49/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 1</div>
                            <div class="episode-item-title">Chapter 1</div>
                            <div class="episode-item-button episode-item-button--mark-cont" onclick="markAsWatched(this, true);">
                                <div class="episode-item-button--mark"></div>
                                <p>Mark as Watched</p>
                            </div>
                            <div class="episode-item-button episode-item-button--watch-cont">
                                <div class="episode-item-button--watch"></div>
                                <p>Watch Now</p>
                            </div>
                            <div class="episode-item-button episode-item-button--unmark-cont" onclick="markAsWatched(this, false);">
                                <div class="episode-item-button--unmark"></div>
                                <p>Mark as Unwatched</p>
                            </div>
                        </li>
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/6212/20/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 2</div>
                            <div class="episode-item-title">Chapter 2</div>
                            <div class="episode-item-button episode-item-button--mark-cont" onclick="markAsWatched(this, true);">
                                <div class="episode-item-button--mark"></div>
                                <p>Mark as Watched</p>
                            </div>
                            <div class="episode-item-button episode-item-button--watch-cont">
                                <div class="episode-item-button--watch"></div>
                                <p>Watch Now</p>
                            </div>
                            <div class="episode-item-button episode-item-button--unmark-cont" onclick="markAsWatched(this, false);">
                                <div class="episode-item-button--unmark"></div>
                                <p>Mark as Unwatched</p>
                            </div>
                        </li>
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/6222/71/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 3</div>
                            <div class="episode-item-title">Chapter 3</div>
                            <div class="episode-item-button episode-item-button--mark-cont" onclick="markAsWatched(this, true);">
                                <div class="episode-item-button--mark"></div>
                                <p>Mark as Watched</p>
                            </div>
                            <div class="episode-item-button episode-item-button--watch-cont">
                                <div class="episode-item-button--watch"></div>
                                <p>Watch Now</p>
                            </div>
                            <div class="episode-item-button episode-item-button--unmark-cont" onclick="markAsWatched(this, false);">
                                <div class="episode-item-button--unmark"></div>
                                <p>Mark as Unwatched</p>
                            </div>
                        </li>
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/6232/79/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 4</div>
                            <div class="episode-item-title">Chapter 4</div>
                            <div class="episode-item-button episode-item-button--mark-cont" onclick="markAsWatched(this, true);">
                                <div class="episode-item-button--mark"></div>
                                <p>Mark as Watched</p>
                            </div>
                            <div class="episode-item-button episode-item-button--watch-cont">
                                <div class="episode-item-button--watch"></div>
                                <p>Watch Now</p>
                            </div>
                            <div class="episode-item-button episode-item-button--unmark-cont" onclick="markAsWatched(this, false);">
                                <div class="episode-item-button--unmark"></div>
                                <p>Mark as Unwatched</p>
                            </div>
                        </li>
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/6240/65/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 5</div>
                            <div class="episode-item-title">Chapter 5</div>
                            <div class="episode-item-button episode-item-button--mark-cont" onclick="markAsWatched(this, true);">
                                <div class="episode-item-button--mark"></div>
                                <p>Mark as Watched</p>
                            </div>
                            <div class="episode-item-button episode-item-button--watch-cont">
                                <div class="episode-item-button--watch"></div>
                                <p>Watch Now</p>
                            </div>
                            <div class="episode-item-button episode-item-button--unmark-cont" onclick="markAsWatched(this, false);">
                                <div class="episode-item-button--unmark"></div>
                                <p>Mark as Unwatched</p>
                            </div>
                        </li>
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/6249/84/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 6</div>
                            <div class="episode-item-title">Chapter 6</div>
                            <div class="episode-item-button episode-item-button--mark-cont" onclick="markAsWatched(this, true);">
                                <div class="episode-item-button--mark"></div>
                                <p>Mark as Watched</p>
                            </div>
                            <div class="episode-item-button episode-item-button--watch-cont">
                                <div class="episode-item-button--watch"></div>
                                <p>Watch Now</p>
                            </div>
                            <div class="episode-item-button episode-item-button--unmark-cont" onclick="markAsWatched(this, false);">
                                <div class="episode-item-button--unmark"></div>
                                <p>Mark as Unwatched</p>
                            </div>
                        </li>
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/6258/32/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 7</div>
                            <div class="episode-item-title">Chapter 7</div>
                            <div class="episode-item-button episode-item-button--mark-cont" onclick="markAsWatched(this, true);">
                                <div class="episode-item-button--mark"></div>
                                <p>Mark as Watched</p>
                            </div>
                            <div class="episode-item-button episode-item-button--watch-cont">
                                <div class="episode-item-button--watch"></div>
                                <p>Watch Now</p>
                            </div>
                            <div class="episode-item-button episode-item-button--unmark-cont" onclick="markAsWatched(this, false);">
                                <div class="episode-item-button--unmark"></div>
                                <p>Mark as Unwatched</p>
                            </div>
                        </li>
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/6267/94/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 8</div>
                            <div class="episode-item-title">Chapter 8</div>
                            <div class="episode-item-button episode-item-button--mark-cont" onclick="markAsWatched(this, true);">
                                <div class="episode-item-button--mark"></div>
                                <p>Mark as Watched</p>
                            </div>
                            <div class="episode-item-button episode-item-button--watch-cont">
                                <div class="episode-item-button--watch"></div>
                                <p>Watch Now</p>
                            </div>
                            <div class="episode-item-button episode-item-button--unmark-cont" onclick="markAsWatched(this, false);">
                                <div class="episode-item-button--unmark"></div>
                                <p>Mark as Unwatched</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section">
                <div class="section-header">
                    <h2 class="section-header-type">Cast</h2>
                    <div class="section-header-seeall" onclick="seeAll(this, 'cast-list');">See All</div>
                </div>
                <ul class="list cast-list">
                    <li class="cast-item cast-item--creator">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTczOTU3NzY2NV5BMl5BanBnXkFtZTgwMjg3NDUzMDI@._V1_SY1000_CR0,0,1504,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Noah Hawley</div>
                        <div class="cast-item-role">Creator</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTY0NTY5OTI2MF5BMl5BanBnXkFtZTgwNDkzMzIxMzE@._V1_.jpg)"></div>
                        <div class="cast-item-name">Dan Stevens</div>
                        <div class="cast-item-role">David Haller</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ2MTEyMzU2OF5BMl5BanBnXkFtZTgwNjc1NTM4ODE@._V1_.jpg)"></div>
                        <div class="cast-item-name">Rachel Keller</div>
                        <div class="cast-item-role">Syd Barrett</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyMzYyMjQ5OV5BMl5BanBnXkFtZTcwMTA0MTkxNw@@._V1_SY1000_CR0,0,697,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Aubrey Plaza</div>
                        <div class="cast-item-role">Lenny Busker</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(http://www.uncapiano.com/sondheim/images/irwin.jpg)"></div>
                        <div class="cast-item-name">Bill Irwin</div>
                        <div class="cast-item-role">Cary Loudermilk</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(http://www1.pictures.zimbio.com/gi/NYC+Special+Screening+HBO+Film+Confirmation+OnxJrmYAHNYl.jpg)"></div>
                        <div class="cast-item-name">Jeremie Harris</div>
                        <div class="cast-item-role">Ptonomy Wallace</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(http://www.hawtcelebs.com/wp-content/uploads/2017/01/amber-midthunder-at-legion-premiere-in-los-angeles-01-26-2017_1.jpg)"></div>
                        <div class="cast-item-name">Amber Midthunder</div>
                        <div class="cast-item-role">Kerry Loudermilk</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzMDQxNzc2Nl5BMl5BanBnXkFtZTcwNjcyOTQ2NA@@._V1_.jpg)"></div>
                        <div class="cast-item-name">Katie Aselton</div>
                        <div class="cast-item-role">Amy Haller</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNjg0MjUxMF5BMl5BanBnXkFtZTcwMTcyNjY0MQ@@._V1_.jpg)"></div>
                        <div class="cast-item-name">Jean Smart</div>
                        <div class="cast-item-role">Dr. Melanie Bird</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BZjIyM2JjMjUtOTExOC00N2Q2LTljMmQtNzZjNjZiODY1MzhjL2ltYWdlXkEyXkFqcGdeQXVyMTk2Mjc4MQ@@._V1_SY1000_CR0,0,833,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Mackenzie Gray</div>
                        <div class="cast-item-role">The Eye</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTM4MTQ2NTEyOV5BMl5BanBnXkFtZTcwMDgyNjg5Nw@@._V1_.jpg)"></div>
                        <div class="cast-item-name">Ellie Araiza</div>
                        <div class="cast-item-role">Philly</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(http://cimg.tvgcdn.net/i/r/2014/09/03/3cec2d71-7209-442d-ba3d-b795fadf736b/resize/350x509/3facbd99dcdf705ca877d23e04110936/140903jermaine-clement1.jpg)"></div>
                        <div class="cast-item-name">Jemaine Clement</div>
                        <div class="cast-item-role">Oliver Bird</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDU4MTgxM15BMl5BanBnXkFtZTgwNDc1ODIzNjE@._V1_SY1000_SX665_AL_.jpg)"></div>
                        <div class="cast-item-name">Brad Mann</div>
                        <div class="cast-item-role">Rudy</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(http://vignette3.wikia.nocookie.net/fearthewalkingdead/images/1/13/Scott_Lawrence.jpg/revision/latest?cb=20150711105427)"></div>
                        <div class="cast-item-name">Scott Lawrence</div>
                        <div class="cast-item-role">Dr. Poole</div>
                    </li>
                </ul>
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
