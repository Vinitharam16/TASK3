var newdiv = document.createElement("div");
newdiv.innerHTML = "Let's  Play Dice"
newdiv.setAttribute("class","heading")

var headdiv = document.createElement("div");
var playname = document.createElement("span")
playname.setAttribute("class","playname")
playname.setAttribute("class","head1")
playname.innerHTML = "Player-1"
var toplay = document.createElement("span")
toplay.setAttribute("class","head1")
toplay.innerHTML = "To Play"


var maindiv = document.createElement("div")
maindiv.setAttribute("class","maindiv")




var div1 = document.createElement("div")
var p1name = document.createElement("div")
p1name.innerHTML = "Player-1"
p1name.setAttribute("class","p1name")
var p1count = document.createElement("div")
p1count.innerHTML = "0"
p1count.setAttribute("class","p1count")
var p1roll = document.createElement("button")
p1roll.setAttribute("id","p1roll")
p1roll.innerHTML = "Roll Now"
// p1roll.addEventListener("click",roll);
div1.append(p1name,p1count,p1roll)

var dice = document.createElement("div")
dice.setAttribute("class","dice")
dice.innerHTML = getRandom(6)

// var dice = document.createElement("div")
// dice.innerHTML = `<img id="dice1" src="assests\dice1.png" alt="dice1">`
// dice.append('<img>', { 
//   src : "assests\dice1.png", 
//   width : 16, 
//   height : 16, 
//   alt : "Test Image", 
//   title : "Test Image"
// });


var div2 = document.createElement("div")
var p2name = document.createElement("div")
p2name.innerHTML = "Player-2"
p2name.setAttribute("class","p2name")
var p2count = document.createElement("div")
p2count.innerHTML = "0"
p2count.setAttribute("class","p2count")
var p2roll = document.createElement("button")
p2roll.setAttribute("id","p2roll")
p2roll.innerHTML = "Roll Now"
// p1roll.addEventListener("click",roll);
div2.append(p2name,p2count,p2roll)


var reset = document.createElement("button")
reset.setAttribute("id","reset")
reset.innerHTML = "RESET"
// p1roll.addEventListener("click",roll);


maindiv.append(div1,dice,div2)
headdiv.append(playname,toplay);
document.body.append(newdiv,headdiv,maindiv,reset);

function getRandom(num) {
    return Math.floor(Math.floor((Math.random()*num)+1));
  }
  