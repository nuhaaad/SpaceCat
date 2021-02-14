const character = document.getElementById("character";)
const meteor = document.getElementById("meteor");
// this function will make our character jump
function jump(){
if (character.classList != "jump") // with this it will not try to reset the animation over and over
    character.classList.add("jump");

setTimeout(function() {
   character.classList.remove("jump");
  }, 300); // this animation lasts for 300ms
 }
}

// we gonna check if our character is still alive
let isAlive = setInterval(function() {
  // get current character y position
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  console.log(characterTop);

  // get current meteor x position
  let meteorLeft = parseInt(window.getComputedStyle(meteor).getPropertyValue("left"));
  console.log(meteorLeft);

  // detect collision
  if (meteorLeft < 50 && meteorLeft > 0 && characterTop >= 140) {

alert("GAME OVER!");
  }

}, 10);



document.addEventlistener("keydown", function (event) {
  jump();
});  // this is for any keyboard - (it jumps only once )
