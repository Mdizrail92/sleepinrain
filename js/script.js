var currentTime = new Date().getHours();
if (document.body) {
    if (7 >= currentTime && currentTime > 20) {
        document.body.background = "images/2.jpg";
    }
    else {
        document.body.background = "images/1-min.jpg";
    }
}
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  document.getElementById('play').innerHTML="Pause";
  isPlaying = true;
};
myAudio.onpause = function() {
    document.getElementById("play").innerHTML="Play";
  isPlaying = false;
};