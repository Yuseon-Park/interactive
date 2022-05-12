var video = document.getElementById("video")


video.controls = false;


video.addEventListener("timeupdate", updateProgress, false);


function updateProgress() {
    var progress = document.getElementById("progress");

    var progress_rate = 0;
    if (video.currentTime > 0) {
       progress_rate = Math.floor((100 / video.duration) * video.currentTime);
    }
    progress.style.width = progress_rate + "%";
}
