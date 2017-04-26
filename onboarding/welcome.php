<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/fonts.css">
        <link rel="stylesheet" type="text/css" href="/css/base.css">
        <link rel="stylesheet" type="text/css" href="/css/onboarding.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/data.js"></script>
        <script type="text/javascript" src="/js/onboarding.js"></script>
    </head>
    <body>
        <div class="container">
            <a href="../index.php" class="logo"></a>
            <div class="section" id="welcome">
                <div class="header-section">
                    <h1>Welcome!</h1>
                    <h3>We're happy to have you!</h3>
                    <h6>Let's get you started on your journey.</h6>
                </div>
                <form onsubmit="return submitInfo();">
                    <div class="field--cont" id="fullname--cont">
                        <input type="text" placeholder="Full name" name="firstname" id="fullname" class="textfield" autocomplete="off" onblur="checkName(true);"/>
                    </div>
                    <div class="field--cont" id="email--cont">
                        <input type="email" placeholder="Email address" name="email" id="email" class="textfield" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"/>
                    </div>
                    <div class="field--cont" id="username--cont">
                        <input type="text" placeholder="Username" name="username" id="username" class="textfield" autocomplete="off" oninput="checkUsername(true); submitInfo();"/>
                        <p class="msg">Please choose a username that is all lowercase, containing only letters, numbers, periods, hyphens, and underscores.</p>
                    </div>
                    <input type="button" value="Next" class="button button--primary button--disabled" onclick="nextPage(); centerScrolls(); nameReplace();"/>
                </form>
                <div class="quote-section">
                    <h4>"Dr. Grant, my dear Dr. Sattler... Welcome to Jurassic Park."</h4>
                    <h5>- John Hammond, <span>Jurassic Park</span></h5>
                </div>
            </div>
            <div class="section section--hidden" id="genres">
                <div class="header-section">
                    <h1>Genres</h1>
                    <h3>What do you like?</h3>
                    <h6>This will help us get to know you better, <span>Josh</span>.<br />Choose at least three of your favorite genres.<br />These can be changed later.</h6>
                    <div class="instruct instruct--like">Tap once to like</div>
                    <div class="instruct instruct--love">Tap twice to love</div>
                    <div class="instruct instruct--dislike">Tap and hold to dislike</div>
                </div>
                <div class="genres-container">
                    <div class="genres"></div>
                </div>
                <input type="button" value="Next" class="button button--primary button--disabled" onclick="nextPage(); generateShows();"/>
                <div class="quote-section">
                    <h4>"I'm a genre lover - everything from spaghetti western to samurai movie."</h4>
                    <h5>- Quentin Tarantino</h5>
                </div>
            </div>
            <div class="section section--hidden" id="shows">
                <div class="header-section">
                    <h1>Shows</h1>
                    <h3>Show me the money!</h3>
                    <h6>We've picked some shows you might have watched based on your favorite genres.<br />Choose at least three shows you've seen.<br />These can be changed later.</h6>
                    <div class="instruct instruct--watch">Tap once to mark as watched</div>
                </div>
                <div class="chosen-list">
                    <div class="chosen-item chosen-item--disabled"></div>
                    <div class="chosen-item chosen-item--disabled"></div>
                    <div class="chosen-item chosen-item--disabled"></div>
                </div>
                <div class="pick-container"></div>
                <input type="button" value="Next" class="button button--primary button--disabled" onclick="nextPage(); generateMovies();"/>
                <div class="refresh" onclick="generateShows();">More shows</div>
                <div class="quote-section">
                    <!--<h4>"It's a heartwarming story but it's just not believable, which is why I give E.T. one and a half stars."</h4>
                    <h5>- Perd Hapley, <span>Parks and Recreation</span></h5>-->
                    <h4>"You don't own a TV? What's all your furniture pointed at?"</h4>
                    <h5>- Joey Tribbiani, <span>Friends</span></h5>
                </div>
            </div>
            <div class="section section--hidden" id="movies">
                <div class="header-section">
                    <h1>Movies</h1>
                    <h3>Movie to the beat!</h3>
                    <h6>We've also picked some movies you might have watched based on your favorite genres.<br />Choose at least three movies you've seen.<br />These can be changed later.</h6>
                    <div class="instruct instruct--watch">Tap once to mark as watched</div>
                </div>
                <div class="chosen-list">
                    <div class="chosen-item chosen-item--disabled"></div>
                    <div class="chosen-item chosen-item--disabled"></div>
                    <div class="chosen-item chosen-item--disabled"></div>
                </div>
                <div class="pick-container"></div>
                <input type="button" value="Next" class="button button--primary button--disabled" onclick="nextPage(); centerScrolls();"/>
                <div class="refresh" onclick="generateMovies();">More movies</div>
                <div class="quote-section">
                    <h4>"It's a heartwarming story but it's just not believable, which is why I give E.T. one and a half stars."</h4>
                    <h5>- Perd Hapley, <span>Parks and Recreation</span></h5>
                </div>
            </div>
            <div class="section section--hidden" id="services">
                <div class="header-section">
                    <h1>Services</h1>
                    <h3>Almost there!</h3>
                    <h6>In order to help us curate recommendations better suited for you, we ask you to choose the services you use to watch shows and movies.</h6>
                </div>
                <div class="services-container">
                    <div class="services">
                        <div class="services-row">
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Hulu.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Yahoo TV.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Seeso.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Netflix.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/HBO GO.png" />
                            </div>
                        </div>
                        <div class="services-row">
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Showtime.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Epix.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/HBO NOW.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/YouTube Red.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Amazon Prime.png" />
                            </div>
                        </div>
                        <div class="services-row">
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Starz.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Cinemax.png" />
                            </div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/Crackle.png" />
                            </div>
                            <div class="service-item service-item--textonly" onclick="chooseService(this);">Cable<img /></div>
                            <div class="service-item" onclick="chooseService(this);">
                                <img src="/img/services/CBS All Access.png" />
                            </div>

                        </div>
                    </div>
                </div>
                <input type="button" value="Next" class="button button--primary" onclick="nextPage();"/>
                <div class="quote-section">
                    <h4>"Life is a movie, and you're the star. Give it a happy ending."</h4>
                    <h5>- Joan Rivers</h5>
                </div>
            </div>
            <div class="section section--hidden" id="password">
                <div class="header-section">
                    <h1>Password</h1>
                    <h3>Last step!</h3>
                    <h6>As with any account, we ask you to secure your information with a password.</h6>
                </div>
                <form onsubmit="return false;">
                    <div class="field--cont" id="pass--cont">
                        <input type="password" placeholder="Password" name="pass" id="pass" class="textfield" autocomplete="off" onblur="checkPass(true);" oninput="checkPass(false);"/>
                        <p class="msg">Your password must be at least 8 characters long.</p>
                    </div>
                    <div class="field--cont" id="confpass--cont">
                        <input type="password" placeholder="Confirm password" name="confpass" id="confpass" class="textfield" autocomplete="off" onblur="checkPass(true);" oninput="checkPass(false);"/>
                    </div>
                    <input type="button" value="Finish" class="button button--primary button--disabled" onclick="nextPage();"/>
                </form>
                <div class="quote-section">
                    <h4>"Safety never takes a holiday."</h4>
                    <h5>- Paul Blart, <span>Paul Blart Mall Cop</span></h5>
                </div>
            </div>
            <div class="section section--hidden" id="finish">
                <div class="header-section">
                    <h1>Finished!</h1>
                    <h3>You're all set up!</h3>
                    <h6>Now it's time to start binging with your friends.<br />Press the button below when you're ready and we'll get you on your way.</h6>
                </div>
                <form onsubmit="return false;">
                    <input type="button" value="I'm ready!" class="button button--primary" onclick="nextPage();"/>
                </form>
                <div class="quote-section">
                    <h4>"Thanks for the adventure. Now go have one of your own!"</h4>
                    <h5>- Ellie Fredrickson, <span>Up</span></h5>
                </div>
            </div>
        </div>
    </body>
</html>
