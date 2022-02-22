// Grab a handle to the video
var video = document.getElementById("video")

// Turn off the default controls
video.controls = false;

video.addEventListener("timeupdate", updateProgress, false);

function updateProgress() {
    var progress = document.getElementById("progress");
    var value = 0;
    if (video.currentTime > 0) {
       value = Math.floor((100 / video.duration) * video.currentTime);
    }
    progress.style.width = value + "%";
}

