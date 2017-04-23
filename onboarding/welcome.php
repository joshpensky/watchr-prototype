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
            <div class="section section--hidden" id="welcome">
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
                        <input type="email" placeholder="Email address" name="email" id="email" class="textfield" autocomplete="off"/>
                    </div>
                    <div class="field--cont" id="username--cont">
                        <input type="text" placeholder="Username" name="username" id="username" class="textfield" autocomplete="off" oninput="checkUsername(true);" oninput="submitInfo();"/>
                        <p class="msg">Please choose a username that is all lowercase, containing only letters, numbers, periods, hyphens, and underscores.</p>
                    </div>
                    <input type="button" value="Next" class="button button--primary button--disabled" onclick="nextPage();"/>
                </form>
                <div class="quote-section">
                    <h4>"Dr. Grant, my dear Dr. Sattler... Welcome to Jurassic Park."</h4>
                    <h5>- John Hammond, <span>Jurassic Park</span></h5>
                </div>
            </div>
            <div class="section" id="genres">
                <div class="header-section">
                    <h1>Genres</h1>
                    <h3>We all like different things.</h3>
                    <h6>This will help us get to know you better, <span>Josh</span>.<br />Choose at least three of your favorite genres.<br />These can be changed later.</h6>
                    <div class="instruct instruct--like">Tap once to like</div>
                    <div class="instruct instruct--love">Tap twice to love</div>
                    <div class="instruct instruct--dislike">Tap and hold to dislike</div>
                </div>
                <div class="genres-container">
                    <div class="genres"></div>
                </div>
                <input type="button" value="Next" class="button button--primary button--disabled" onclick="nextPage();"/>
                <div class="quote-section">
                    <h4>"I'm a genre lover - everything from spaghetti western to samurai movie."</h4>
                    <h5>- Quentin Tarantino</h5>
                </div>
            </div>
            <div class="section section--hidden" id="shows">
                <div class="header-section">
                    <h1>Shows</h1>
                    <h3>We all like different things.</h3>
                    <h6>This will help us get to know you better, <span>Josh</span>.<br />Choose at least three of your favorite genres.</h6>
                    <div class="instruct instruct--like">Tap once to like</div>
                    <div class="instruct instruct--love">Tap twice to love</div>
                    <div class="instruct instruct--dislike">Tap and hold to dislike</div>
                </div>
                <div class="genres-container">
                    <div class="genres"></div>
                </div>
                <input type="button" value="Next" class="button button--primary button--disabled" onclick="nextPage();"/>
                <div class="quote-section">
                    <!--<h4>"It's a heartwarming story but it's just not believable, which is why I give E.T. one and a half stars."</h4>
                    <h5>- Perd Hapley, <span>Parks and Recreation</span></h5>-->
                    <h4>"You don't own a TV? What's all your furniture pointed at?"</h4>
                    <h5>- Joey Tribbiani, <span>Friends</span></h5>
                </div>
            </div>
        </div>
    </body>
</html>
