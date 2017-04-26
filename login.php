<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <title>watchr</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="/css/fonts.css">
        <link rel="stylesheet" type="text/css" href="/css/nav.css">
        <link rel="stylesheet" type="text/css" href="/css/login.css">
        <link href="https://fonts.googleapis.com/css?family=Montserrat:600|Nunito:400,600,700|Roboto:400,500" rel="stylesheet">
        <script type="text/javascript" src="/js/data.js"></script>
        <script type="text/javascript" src="/js/login.js"></script>
    </head>
    <body>
        <a class="logo" href="index.php">
            <svg id="logo" width="35" height="35" viewBox="0 0 100 100">
                <path class="logo-dark" d="M30.57,90.49C42.5,51.41,60.13,30.44,60.13,
                30.44l-7-3.33-6-7.95-1.84.32L44.7,20l-.26.35s-19.51,24.8-24.8,55L29.78,
                91.51l.72-.85Z"/>
                <path class="logo-dark" d="M76,40.3,55.91,53.69,61.76,72,79.32,
                61l14.07-8.8a3.16,3.16,0,0,0,0-5.36L82.7,40.2A6.17,6.17,0,0,0,76,40.3Z"/>
                <path class="logo" d="M26.52,5.06,19.69.79A5.2,5.2,0,0,0,12,3.5c-2.9,
                8.3-4.89,25.81-4.89,46.07,0,22.59,2.48,41.76,5.93,48.56a3.37,3.37,0,0,0,
                4.86,1.33s9.11-5.67,10.71-6.7a4.47,4.47,0,0,0,
                1.94-2.26c-.25.55-.82.3-1-.64-2.07-9.36-3.33-23.93-3.33-40.28,0-15.32,
                1.14-29.08,3-38.46A5.84,5.84,0,0,0,26.52,5.06Z"/>
                <path class="logo" d="M61.6,70c-.46-6.26-.72-13.16-.72-20.42,
                0-6.66.22-13,.61-18.85a6.07,6.07,0,0,0-2.84-5.56L48.31,18.69a2.46,
                2.46,0,0,0-3.14.79c-.2.26-.46.55-.46.55l-.2.27c.19-.25.81-1,
                1.32-.78.26.11.26.77.22,1.35h0c0,.26-.06.53-.09.79l0,.13v0a240.36,
                240.36,0,0,0-1.5,27.79c0,9,.39,17.46,1.09,24.81a4.57,4.57,0,0,0,7,
                3.45l11-6.88A1.24,1.24,0,0,1,61.6,70Z"/>
            </svg>
            <p id="logotype">watchr</p>
        </a>
        <div class="content">
            <form onsubmit="return correctLogin();">
                <h1>Log in</h1>
                <div class="msg msg--error msg--hidden"></div>
                <div class="field--cont" id="username--cont">
                    <input type="text" placeholder="Username or email" name="username" id="username" class="textfield" autocomplete="off"/>
                </div>
                <div class="field--cont" id="password--cont">
                    <input type="password" placeholder="Password" name="password" id="password" class="textfield" autocomplete="off"/>

                </div>
                <div class="field--cont field--cont-checkbox" id="password--cont">
                    <input type="checkbox" id="rememberMe" name="rememberMe" value="Remember me" class="checkbox">
                    <label for="rememberMe" class="checkbox--label">Remember me?</label>
                </div>
                <input type="button" value="Log In" id="login" class="button button--primary" onclick="return correctLogin();"/>
                <div class="caption caption--pass">Forgot your password?</div>
                <div class="caption">Don't have an account? Create one <a href="/onboarding/welcome.php">here</a>.</div>
            </form>
        </div>
        <?php include 'includes/footer.php'; ?>
    </body>
</html>
