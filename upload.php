<?php
$src = $_FILES['file']['tmp_name'];
$targ = "images/upload/".$_FILES['file']['name'];
move_uploaded_file($src, $targ);
?>
