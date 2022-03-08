
$(document).keydown(function(e){
  if(e.key == "A"){
      playSound("A");
  }
  else if(e.key == "g"){
      playSound("g");
  }
  else if(e.key == "C"){
      playSound("C");
      $("message").html("C")
  }
  else if(e.key == "o"){
      playSound("o");
      $("message").html("o")
  }
  else if(e.key == "m"){
      playSound("m");
      $("message").html("m")
  }
  else if(e.key == "i"){
      playSound("i");
      $("message").html("i")
  }
  else if(e.key == "n"){
      playSound("n");
      $("message").html("n")
  }
})

//sounds overlap one another
function playSound (id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play();
    }
}
