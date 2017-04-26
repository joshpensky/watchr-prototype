<?php
$showname = $_POST['showname'];
$link = str_replace(" ", "_", $showname);
$dir = "shows/" . $link . ".php";
echo copy("templates/shows.php", $dir);
?>
