const canvas = document.querySelector('.video-canvas');
const context = canvas.getContext('2d');
const videoImages = [];

let totalImagesCount = 4779;
let progress;
let currentFrame;


function setImages() {
    for (let i = 0; i < totalImagesCount; i++) {
        let imgElement = document.createElement('img')

        imgElement.src = `video_imgs/MagneticFilm_Low_${1 + i}.jpg`;
        videoImages.push(imgElement);
    }
}


function loop() {
    progress = pageYOffset / (document.body.offsetHeight - window.innerHeight);

    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    currentFrame = Math.round((totalImagesCount - 1) * progress);
	context.drawImage(videoImages[currentFrame], 0, 0);

    requestAnimationFrame(loop);
}


function init() {
    document.body.classList.remove('before-load');
    context.drawImage(videoImages[0], 0, 0);

    loop();
}


window.addEventListener('load', init);


setImages()
