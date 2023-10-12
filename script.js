function startgame(){
  score1 = 0;
  score2 = 0;
  activePlayer = Math.round(Math.random());
  p1count.innerHTML = '0';
  p2count.innerHTML = '0';
  switchplayer()
}

function roll1(){
  value = Math.floor(Math.floor((Math.random()*6)+1));
  score1 = score1 + value
  p1count.innerHTML = score1
  if (score1 > 30 || score1 == 30){
    dice.innerHTML = "Player-1 wins"
    dice.style.marginTop = "80px"
    document.getElementById("p1roll").disabled = true;
    document.getElementById("p2roll").disabled = true;
    p1roll.style.backgroundColor = "grey"
    p2roll.style.backgroundColor = "grey"  
  }
  else{
    dice.innerHTML = `<img id="dice1" src="dice${value}.png" alt="dice1">`
    switchplayer();
  }
}

function roll2(){
  value = Math.floor(Math.floor((Math.random()*6)+1));
  score2 = score2 + value
  p2count.innerHTML = score2
  if (score2 > 30 || score2 == 30){
    dice.innerHTML = "Player-2 wins"
    dice.style.marginTop = "80px"
    document.getElementById("p1roll").disabled = true;
    document.getElementById("p2roll").disabled = true;
    p1roll.style.backgroundColor = "grey"
    p2roll.style.backgroundColor = "grey"
  }
  else{
    dice.innerHTML = `<img id="dice1" src="dice${value}.png" alt="dice1">`
    switchplayer();
  }
}

function switchplayer(){
    if(activePlayer == 0){
      activePlayer = 1
      document.getElementById("p1roll").disabled = true;
      document.getElementById("p2roll").disabled = false;
      p1roll.style.backgroundColor = "grey"
      p2roll.style.backgroundColor = "green"
      playname.innerHTML = "Player-2"
    }
    else {
      activePlayer = 0
      document.getElementById("p2roll").disabled = true;
      document.getElementById("p1roll").disabled = false;
      p2roll.style.backgroundColor = "grey"
      p1roll.style.backgroundColor = "green"
      playname.innerHTML = "Player-1"
    }

}

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
p1count.innerHTML = '0'
p1count.setAttribute("class","p1count")
var p1roll = document.createElement("button")
p1roll.setAttribute("id","p1roll")
p1roll.innerHTML = "Roll Now"
p1roll.addEventListener("click",roll1);
div1.append(p1name,p1count,p1roll)

var dice = document.createElement("div")
dice.setAttribute("class","winner")
var dice1 = document.getElementById("dice1")
dice.append(dice1)

var div2 = document.createElement("div")
var p2name = document.createElement("div")
p2name.innerHTML = "Player-2"
p2name.setAttribute("class","p2name")
var p2count = document.createElement("div")
p2count.innerHTML = '0'
p2count.setAttribute("class","p2count")
var p2roll = document.createElement("button")
p2roll.setAttribute("id","p2roll")
p2roll.innerHTML = "Roll Now"
p2roll.addEventListener("click",roll2);
div2.append(p2name,p2count,p2roll)

var reset = document.createElement("button")
reset.setAttribute("id","reset")
reset.innerHTML = "RESET"
reset.addEventListener("click",startgame);

maindiv.append(div1,dice,div2)
headdiv.append(playname,toplay);
document.body.append(newdiv,headdiv,maindiv,reset);

startgame();

