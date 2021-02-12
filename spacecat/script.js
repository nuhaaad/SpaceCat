var meteor = document.getElementById("meteor");
var meteortwo = document.getElementById("meteortwo");
var character = document.getElementById("character");
var jumping = 0;

meteortwo.addEventlistener('animationiteration', () => {
          var random = Math.random()*3;
          var top = (random*100)+150;
          meteortwo.style.top = -(top) + "px";
});
setInterval(function(){
  var characterTop =
  parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  if (jumping==0) {
      character.style.top = (characterTop+3)+"px";
}
},10);

function jump () {
  jumping = 1;
  let jumpCount = 0;
  var jumpInterval = setInterval(function){
    var characterTop =
    parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if((characterTop>6)&&(counter<15)) {
      character.style.top = (characterTop-5)+"px";
    }

    if(jumpCount>20){
      clearInterval(jumpInterval);
      jumping=0;
      jumpCount=0;
    }

      jumpCount++;
  },10);

}
