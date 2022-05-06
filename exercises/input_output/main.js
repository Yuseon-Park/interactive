var images = [
  "images/fsa_01.jpeg",
  "images/fsa_02.jpeg",
  "images/fsa_03.jpeg",
  "images/fsa_04.jpeg",
  "images/fsa_05.jpeg",
  "images/fsa_06.jpeg",
  "images/fsa_07.jpeg",
  "images/fsa_08.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_01.jpeg",
  "images/fsa_02.jpeg",
  "images/fsa_03.jpeg",
  "images/fsa_04.jpeg",
  "images/fsa_05.jpeg",
  "images/fsa_06.jpeg",
  "images/fsa_07.jpeg",
  "images/fsa_08.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_01.jpeg",
  "images/fsa_02.jpeg",
  "images/fsa_03.jpeg",
  "images/fsa_04.jpeg",
  "images/fsa_05.jpeg",
  "images/fsa_06.jpeg",
  "images/fsa_07.jpeg",
  "images/fsa_08.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_01.jpeg",
  "images/fsa_02.jpeg",
  "images/fsa_03.jpeg",
  "images/fsa_04.jpeg",
  "images/fsa_05.jpeg",
  "images/fsa_06.jpeg",
  "images/fsa_07.jpeg",
  "images/fsa_08.jpeg",
  "images/fsa_09.jpeg",
  "images/fsa_01.jpeg",
  "images/fsa_02.jpeg",
  "images/fsa_03.jpeg",
  "images/fsa_04.jpeg",
  "images/fsa_05.jpeg",
  "images/fsa_06.jpeg",
  "images/fsa_07.jpeg",
  "images/fsa_08.jpeg",
  "images/fsa_09.jpeg",
]

var range = images.length;

$(window).click(function(){
  var index = Math.floor(Math.random() * range);
  var image_src = images[index];
  var image = document.createElement("img");
  console.log(image);
  image.src = image_src;
  $('body').prepend(image);
})


function resize( ) {
  var size = Math.floor(Math.random() * 100);
  var size_px = size + "px";
  $("*").css("font-size", size_px);
};

setInterval(resize, 1000);
