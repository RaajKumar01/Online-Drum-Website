var drums = document.querySelectorAll(".drum");

for(var i = 0; i < drums.length; i++) {
   
   drums[i].addEventListener("click", function() {
      var drumbutton = this.innerHTML;
      DrumBeat(drumbutton);
      BoxAnimation(drumbutton);
   });
}


document.addEventListener("keypress", function(event) {
         
      var drumkey = event.key;
      DrumBeat(drumkey);
      BoxAnimation(drumkey);

});

function DrumBeat(key) {

      switch(key) {

            case 'w':
                  var beatw = new Audio("sounds/crash.mp3");
                  beatw.play();
                  break;
            case "a":
                  var beata = new Audio("sounds/kick-bass.mp3");
                  beata.play();
                  break;
            case "s":
                  var beats = new Audio("sounds/snare.mp3");
                  beats.play();
                  break;
            case "d":
                  var beatd = new Audio("sounds/tom-1.mp3");
                  beatd.play();
                  break;
            case "j":
                  var beatj = new Audio("sounds/tom-2.mp3");
                  beatj.play();
                  break;
            case "k":
                  var beatk = new Audio("sounds/tom-3.mp3");
                  beatk.play();
                  break;
            case "l":
                  var beatl = new Audio("sounds/tom-4.mp3");
                  beatl.play();
                  break;
      }
}

function BoxAnimation(keyPressed) {

      var CurrentKey = document.querySelector("." + keyPressed);

      CurrentKey.classList.add("pressed");

      setTimeout(function() {

            CurrentKey.classList.remove("pressed");
 
      }, 100 );
}