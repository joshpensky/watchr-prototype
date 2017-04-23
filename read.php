<?php
if ($file = fopen("data/userdata.json", "r")) {
    while(!feof($file)) {
        $line = fgets($file);
        echo $line;
    }
    fclose($file);
}
echo("ENDOFFILE");
if ($file = fopen("data/shows.json", "r")) {
    while(!feof($file)) {
        $line = fgets($file);
        echo $line;
    }
    fclose($file);
}
?>
