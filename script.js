var newdiv = document.createElement("div");
newdiv.innerHTML = "Let's  Play Dice"
newdiv.setAttribute("class","heading")
var bold = document.createElement("strong")


var div = document.createElement("div");



var d1 = document.createElement("div")
d1.setAttribute("class","player1")
d1.innerHTML = "Player-1 To Play"

var p1 = document.createElement("div");
p1.innerHTML = getRandom(6);




bold.append(newdiv)
document.body.append(bold,p1);

function getRandom(num) {
    return Math.floor(Math.floor((Math.random()*num)+1));
  }
  