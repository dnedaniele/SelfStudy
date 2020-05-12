



//// Function Player 1


function diceThrow1Player() {  
  var randomNumber1 = Math.floor(Math.random() * 6)+1;

if (randomNumber1 === 1 ) {
    document.querySelector(".dice .img1").setAttribute("src", "images/dice1.png");
}
if (randomNumber1 === 2) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice2.png");
}
if (randomNumber1 === 3) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice3.png");
}
if (randomNumber1 === 4) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice4.png");
}
if (randomNumber1 === 5) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice5.png");
}
if (randomNumber1 === 6) {
  document.querySelector(".dice .img1").setAttribute("src", "images/dice6.png");
}
console.log("first player " + randomNumber1);
return randomNumber1
}

////////// Function Player 2

function diceThrow2Player() {  
  var randomNumber2 = Math.floor(Math.random() * 6)+1; 

if (randomNumber2 === 1 ) {
    document.querySelector(".dice .img2").setAttribute("src", "images/dice1.png");
}
if (randomNumber2 === 2) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice2.png");
}
if (randomNumber2 === 3) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice3.png");
}
if (randomNumber2 === 4) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice4.png");
}
if (randomNumber2 === 5) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice5.png");
}
if (randomNumber2 === 6) {
  document.querySelector(".dice .img2").setAttribute("src", "images/dice6.png");
}
console.log("second player " + randomNumber2);
return randomNumber2
}

////
function compareScore() {
  
  if(diceThrow1Player > diceThrow2Player) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
  }
  else if (diceThrow2Player > diceThrow1Player) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw";
  }

  

}

///////

function clickPlay() {
 diceThrow1Player();
 diceThrow2Player();
  compareScore();
}

