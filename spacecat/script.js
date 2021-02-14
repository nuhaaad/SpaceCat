const character = document.getElementById("character";)

// this function will make our character jump
function jump(){
if (character.classList != "jump") // with this it will not try to reset the animation over and over 
    character.classList.add("jump");

setTimeout(function() {
   character.classList.remove("jump");
  }, 300); // this animation lasts for 300ms
 }
}

document.addEventlistener("keydown", function (event) {
  jump();
});  // this is for any keyboard - (it jumps only once )
