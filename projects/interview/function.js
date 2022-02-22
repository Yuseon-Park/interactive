const bodyTag = document.querySelector("body")
const static = document.querySelector(".static")
const entry = document.querySelector(".entry")
const entryBg = document.querySelector(".entry-bg")
const containerTag = document.querySelector(".container")

entry.addEventListener("click", function(){
     static.style.display = "none"
     entry.style.display = "none"
     entryBg.style.display = "none"
     video.play()
     video.volume = 1.0
})

video.addEventListener("ended", function (){
    entryBg.style.display = "block"
    static.style.display = "block"
    setTimeout(() => {
    }, 2000);
})

const right = document.querySelector(".right")
let scrollOptions = {
    left: 0,
    top: 600,
    behavior: 'smooth'
}

function stream(){
    right.scrollBy(scrollOptions)
    setTimeout (stream, 2800)

    if( right.scrollTop === (right.scrollHeight - right.offsetHeight)){
        right.scrollTo (0,0)
    }

}
