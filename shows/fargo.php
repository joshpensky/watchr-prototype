<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>Fargo - watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/show.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/show.js"></script>
        <script type="text/javascript" src="/js/selector.js"></script>
    </head>
    <body>
        <?php include '../includes/nav.php'; ?>
        <div class="modal modal-remove modal--hidden">
            <div class="modal-close" onclick="remModal(false);"></div>
            <div class="modal-img"></div>
            <h2 class="modal-header">Remove Fargo from your Watchlist?</h2>
            <p class="modal-body">You will lose all progress you currently have on this show.</p>
            <div class="modal-btns">
                <div class="modal-btn modal-btn-secondary" onclick="remShow(); remModal(false);">Yes</div>
                <div class="modal-btn modal-btn-primary" onclick="remModal(false);">No</div>
            </div>
        </div>
        <div class="dark-cover dark-cover--hidden"></div>
        <div class="content">
            <div class="hero">
                <div class="show-header">
                    <div class="show-header-cover" id="fargo"></div>
                    <div class="show-header-progress">
                        <div class="show-header-progress-bar"></div>
                    </div>
                    <div class="show-header-info">
                        <h1 class="show-header-info-title">Fargo</h1>
                        <h4 class="show-header-info-year">2014 - Present</h4>
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
                        <div class="about-genres-item-img" id="crime"></div>
                        <div class="about-genres-item-type">Crime</div>
                    </li>
                    <li class="about-genres-item">
                        <div class="about-genres-item-img" id="drama"></div>
                        <div class="about-genres-item-type">Drama</div>
                    </li>
                    <li class="about-genres-item">
                        <div class="about-genres-item-img" id="thriller"></div>
                        <div class="about-genres-item-type">Thriller</div>
                    </li>
                </ul>
                <div class="about-details">
                    <p class="about-details-rating">TV-MA</p>
                    <p class="about-details-timing">55 min</p>
                    <p class="about-details-seasons">3 Seasons</p>
                </div>
                <p class="about-description">Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, ND.</p>
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
                            <div class="friend-progress--pic" id="tanner"></div>
                        </div>
                        <p class="friends-watching-item--name">Tanner</p>
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
                        <p class="friends-watching-item--ep">S02E08</p>
                    </li>
                    <li class="friends-watching-item">
                        <div class="friend-progress">
                            <svg class="friend-progress--circle" width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="36.5"/>
                        		<circle class="prog" cx="40" cy="40" r="36.5"/>
                        	</svg>
                            <div class="friend-progress--pic" id="maryann"></div>
                        </div>
                        <p class="friends-watching-item--name">Maryann</p>
                        <p class="friends-watching-item--ep">S02E02</p>
                    </li>
                    <li class="friends-watching-item">
                        <div class="friend-progress">
                            <svg class="friend-progress--circle" width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="36.5"/>
                        		<circle class="prog" cx="40" cy="40" r="36.5"/>
                        	</svg>
                            <div class="friend-progress--pic" id="josh"></div>
                        </div>
                        <p class="friends-watching-item--name">Josh</p>
                        <p class="friends-watching-item--ep">S01E07</p>
                    </li>
                    <li class="friends-watching-item">
                        <div class="friend-progress">
                            <svg class="friend-progress--circle" width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="36.5"/>
                        		<circle class="prog" cx="40" cy="40" r="36.5"/>
                        	</svg>
                            <div class="friend-progress--pic" id="jess"></div>
                        </div>
                        <p class="friends-watching-item--name">Jess</p>
                        <p class="friends-watching-item--ep">S01E02</p>
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
                    <li class="friends-watching-item">
                        <div class="friend-progress">
                            <svg class="friend-progress--circle" width="80" height="80" viewBox="0 0 80 80">
                                <circle cx="40" cy="40" r="36.5"/>
                        		<circle class="prog" cx="40" cy="40" r="36.5"/>
                        	</svg>
                            <div class="friend-progress--pic" id="ray"></div>
                        </div>
                        <p class="friends-watching-item--name">Ray</p>
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
                        <li class="media-sel-item" onclick="changeSection(this);">
                            <div class="media-sel-item-title">Season 2</div>
                        </li>
                    </ul>
                </div>
                <div class="season-1 episodes-container profile-section">
                    <!--<div class="section-header">
                        <div class="section-header-seeall" onclick="seeAll(this, 'episode-list');">See All</div>
                    </div>-->
                    <ul class="list episode-list">
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5112/42/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 1</div>
                            <div class="episode-item-title">The Crocodile's Dilemma</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5116/25/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 2</div>
                            <div class="episode-item-title">The Rooster Prince</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5120/28/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 3</div>
                            <div class="episode-item-title">A Muddy Road</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5125/34/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 4</div>
                            <div class="episode-item-title">Eating the Blame</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5130/41/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 5</div>
                            <div class="episode-item-title">The Six Ungraspables</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5134/47/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 6</div>
                            <div class="episode-item-title">Buridan's Ass</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5138/02/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 7</div>
                            <div class="episode-item-title">Who Shaves the Barber?</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5141/96/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 8</div>
                            <div class="episode-item-title">The Heap</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5146/64/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 9</div>
                            <div class="episode-item-title">A Fox, a Rabbit, and a Cabbage</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5151/73/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 10</div>
                            <div class="episode-item-title">Morton's Fork</div>
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
                <div class="season-2 episodes-container profile-section profile-section--hidden profile-section--invis">
                    <!--<div class="section-header">
                        <div class="section-header-seeall" onclick="seeAll(this, 'episode-list');">See All</div>
                    </div>-->
                    <ul class="episode-list">
                        <li class="episode-item episode-item--not-added">
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5586/43/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 1</div>
                            <div class="episode-item-title">Waiting for Dutch</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5594/69/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 2</div>
                            <div class="episode-item-title">Before the Law</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5601/10/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 3</div>
                            <div class="episode-item-title">The Myth of Sisyphus</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5609/03/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 4</div>
                            <div class="episode-item-title">Fear and Trembling</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5616/82/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 5</div>
                            <div class="episode-item-title">The Gift of the Magi</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5624/25/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 6</div>
                            <div class="episode-item-title">Rhinoceros</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5632/17/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 7</div>
                            <div class="episode-item-title">Did You Do This? No, You Did It!</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5638/68/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 8</div>
                            <div class="episode-item-title">Loplop</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5647/99/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 9</div>
                            <div class="episode-item-title">The Castle</div>
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
                            <div class="episode-item-img" style="background-image:url('http://i.onionstatic.com/avclub/5658/73/16x9/1200.jpg');"></div>
                            <div class="episode-item-progress"></div>
                            <div class="episode-item-number">Episode 10</div>
                            <div class="episode-item-title">Palindrome</div>
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
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxOTUwMDI0OF5BMl5BanBnXkFtZTcwNjIyNzkzNw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Billy Bob Thornton</div>
                        <div class="cast-item-role">Lorne Malvo</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0MjAwOTMzMF5BMl5BanBnXkFtZTcwMDg1MjEyNw@@._V1_SY1000_CR0,0,685,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Martin Freeman</div>
                        <div class="cast-item-role">Lester Nygaard</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMmU5ZTJmN2ItZmI0OC00NTQ3LWI0YzktMDNkNjkwNDg2OTVlL2ltYWdlXkEyXkFqcGdeQXVyMTkyNjMwNzc@._V1_.jpg)"></div>
                        <div class="cast-item-name">Allison Tolman</div>
                        <div class="cast-item-role">Molly Solverson</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5OTcxNjIzM15BMl5BanBnXkFtZTcwNDI0NjMyMw@@._V1_.jpg)"></div>
                        <div class="cast-item-name">Colin Hanks</div>
                        <div class="cast-item-role">Gus Grimly</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NzkwNzM1MV5BMl5BanBnXkFtZTgwMzE2MTQ3MjE@._V1_SY1000_CR0,0,751,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Kirsten Dunst</div>
                        <div class="cast-item-role">Peggy Blumquist</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzNzcxNzcxMF5BMl5BanBnXkFtZTgwOTM1ODUzMTE@._V1_SY1000_CR0,0,685,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Patrick Wilson</div>
                        <div class="cast-item-role">Lou Solverson</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ3NjM1NjM0N15BMl5BanBnXkFtZTcwMDUxNjk3Nw@@._V1_SY1000_CR0,0,695,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Jesse Plemons</div>
                        <div class="cast-item-role">Ed Blumquist</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwOTQzNDM3OF5BMl5BanBnXkFtZTcwODQ3MDgzMw@@._V1_.jpg)"></div>
                        <div class="cast-item-name">Ted Danson</div>
                        <div class="cast-item-role">Hank Larsson</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMDgwMzQwMV5BMl5BanBnXkFtZTcwNDc3NDg2Mw@@._V1_SY1000_CR0,0,720,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Bokeem Woodbine</div>
                        <div class="cast-item-role">Mike Milligan</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjQxMDU4MTgxM15BMl5BanBnXkFtZTgwNDc1ODIzNjE@._V1_SY1000_SX665_AL_.jpg)"></div>
                        <div class="cast-item-name">Brad Mann</div>
                        <div class="cast-item-role">Gale Kitchen</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTM3NDI0MjgyNl5BMl5BanBnXkFtZTcwNTUzMTE3OQ@@._V1_SY1000_CR0,0,643,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Carrie Coon</div>
                        <div class="cast-item-role">Gloria Burgle</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjAwNjg0MjUxMF5BMl5BanBnXkFtZTcwMTcyNjY0MQ@@._V1_.jpg)"></div>
                        <div class="cast-item-name">Jean Smart</div>
                        <div class="cast-item-role">Floyd Gerhardt</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1Njg1NzI1Ml5BMl5BanBnXkFtZTcwNTE5ODk1OA@@._V1_SY1000_CR0,0,1101,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Bob Odenkirk</div>
                        <div class="cast-item-role">Bill Oswalt</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BOTk4OTI4MjczOF5BMl5BanBnXkFtZTcwMzI3MTU5Mw@@._V1_.jpg)"></div>
                        <div class="cast-item-name">Keith Carradine</div>
                        <div class="cast-item-role">Lou Solverson</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BNDE3NDIyMDMzNl5BMl5BanBnXkFtZTcwNzIyNzY1OQ@@._V1_.jpg)"></div>
                        <div class="cast-item-name">Cristin Milioti</div>
                        <div class="cast-item-role">Betsy Solverson</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTgzMTA5MjA3MF5BMl5BanBnXkFtZTgwMzY3NjYxNzE@._V1_SY1000_CR0,0,702,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Joey King</div>
                        <div class="cast-item-role">Greta Grimly</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxMDE2NTY1M15BMl5BanBnXkFtZTYwODgyMTk1._V1_.jpg)"></div>
                        <div class="cast-item-name">Zahn McClarnon</div>
                        <div class="cast-item-role">Haneze Dent</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMzE3YjVhYjgtZTQ0Zi00ZmIxLWFhNTYtNjBhZDNjMmY3YTdjL2ltYWdlXkEyXkFqcGdeQXVyMTUwMTc0OTQ@._V1_.jpg)"></div>
                        <div class="cast-item-name">Angus Sampson</div>
                        <div class="cast-item-role">Bear Gerhardt</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MjQ0MDg0Nl5BMl5BanBnXkFtZTcwNjYyNjI5Mg@@._V1_.jpg)"></div>
                        <div class="cast-item-name">Ewan McGregor</div>
                        <div class="cast-item-role">Emmit Stussy / Ray Stussy</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BYWMzMzcxMGItNzI5ZS00ZTAzLTkzNWQtZDAzYWExMGE4MGU4L2ltYWdlXkEyXkFqcGdeQXVyMzM4ODI1Nw@@._V1_SY1000_CR0,0,811,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Jim Gaffigan</div>
                        <div class="cast-item-role">Donny Mashman</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BNDcwMjA2MDMwM15BMl5BanBnXkFtZTcwNjU1NzE4Mg@@._V1_SY1000_CR0,0,666,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Michael Stuhlbarg</div>
                        <div class="cast-item-role">Sy Feltz</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BNTA3MjM4NTE0NV5BMl5BanBnXkFtZTcwOTU1OTY4NQ@@._V1_SY1000_CR0,0,666,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">David Thewlis</div>
                        <div class="cast-item-role">V.M. Vargas</div>
                    </li>
                    <li class="cast-item">
                        <div class="cast-item-img" style="background-image:url(https://images-na.ssl-images-amazon.com/images/M/MV5BNjE3MTU2NjU0OF5BMl5BanBnXkFtZTgwNjgwNzgwNzE@._V1_SY1000_CR0,0,712,1000_AL_.jpg)"></div>
                        <div class="cast-item-name">Mary Elizabeth Winstead</div>
                        <div class="cast-item-role">Nikki Swango</div>
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
