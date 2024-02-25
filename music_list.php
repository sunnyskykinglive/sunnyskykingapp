<?php
$musicFolder = 'music/';


if (!is_dir($musicFolder)) {
    die('Music folder does not exist.');
}

$musicFiles = scandir($musicFolder);

if (!$musicFiles) {
    die('No music files found.');
}


$musicFiles = array_diff($musicFiles, array('', ''));


if (empty($musicFiles)) {
    die('No valid music files found.');
}


echo '<ul>';
foreach ($musicFiles as $music) {
    
    echo '<li>' . $music . '</li>';
}
echo '</ul>';
