const btn = document.querySelectorAll('.btn')
console.log(btn)



const playSong = () =>{
  const song = new Audio('/music.mp3')
  console.log(song.mp3)
  song.play()
alert('A button was clicked')
}


for(let i = 0 ; i<btn.length ; i++){
  btn[i].addEventListener('click' , playSong)
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector( '.nav-links')
menuToggle.addEventListener('click',() => {
  navLinks.classList.toggle('active');
} );

document.addEventListener('DOMContentLoaded', function() {
  const musicListDiv = document.getElementById('music-list');
  const videoListDiv = document.getElementById('video-list');


  fetch('music_list.php')
      .then(response => response.text())
      .then(data => {
         
          musicListDiv.innerHTML = data;
      })
      .catch(error => console.error('Error fetching music list:', error));

  fetch('video_list.php')
      .then(response => response.text())
      .then(data => {
          // Update the content of the video list div with the received data
          videoListDiv.innerHTML = data;
      })
      .catch(error => console.error('Error fetching video list:', error));
});

document.addEventListener('DOMContentLoaded', function() {
  const musicListDiv = document.getElementById('music-list');

  // Fetch the list of music files from the server
  fetch('music_list.php')
      .then(response => response.text())
      .then(data => {
          // Update the content of the music list div with the received data
          musicListDiv.innerHTML = data;
      })
      .catch(error => console.error('Error fetching music list:', error));
});

const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = 'Pause Song';
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Play Song';
  }
});

