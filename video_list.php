<?php

$videoFolder = 'videos/';

$videoFiles = scandir($videoFolder);
$videoFiles = array_diff($videoFiles, array('.', '..')); // Remove . and .. from the list

echo '<ul>';
foreach ($videoFiles as $video) {

    echo '<li>' . $video . '</li>';
}
echo '</ul>';
