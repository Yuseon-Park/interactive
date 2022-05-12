const entry = document.querySelector(".entry")
const entryBg = document.querySelector(".entry-bg")
const static = document.querySelector(".static")


entry.addEventListener("click", function(){
     static.style.display = "none"
     entry.style.display = "none"
     entryBg.style.display = "none"
     video.play()
     video.volume = 1.0
})


video.addEventListener("ended", function(){
    entryBg.style.display = "block"
    static.style.display = "block"
    setTimeout(() => {
    }, 2000);
})
