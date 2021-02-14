const character = document.getElementById("character");
const meteor = document.getElementById("meteor");
const score = document.getElementById("score");

// this function will make our character jump
function jump(){
  character.classList.add"jump-animation");
  setTimeout(() => {
   character.classList.remove("jump-animation");
 }, 500);
}

document.addEventlistener("keypress", () => {
  if (!character.classList.contains("jump-animation")) {
  jump(); // for the keyboard to make the player jump
 }
});

// detect collision / we gonna check if our character is stil alive
setInterval(() => {
  score.innerText++;
  const dinoTop = parseInt(window.getComputedStyle(character)
    .getPropertyValue("top"));
    const meteorLeft = parseInt(window.getComputedStyle(meteor)
      .getPropertyValue("left"));
    if (meteorLeft <0) {
      rock.style.dispaly = "none";
    } else {
      meteor.style.dispaly = ""; // we need this so the meteor comes back after it disapears
    }

    if (meteorLeft < 50 && meteorLeft > 0 && characterTop > 150 ) {
      alert("Your Score is:" + score.innerText + "\n\nPlay Again?");
      location.reload();
    }
}, 50)
