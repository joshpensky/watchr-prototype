<?php
$username = $_POST['username'];
$dir = "users/" . $username . ".php";
echo copy("templates/users.php", $dir);
?>
