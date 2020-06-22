function clickPlay() {

    
// dice Player 1

var randomNumb1 = Math.floor(Math.random() *6) + 1 ;

console.log(randomNumb1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumb1 + ".png");

// Dice Player 2

var randomNumb2 = Math.floor(Math.random() *6) + 1 ;

console.log(randomNumb2);

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumb2 + ".png");

// Change of the score text

if (randomNumb1 > randomNumb2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (randomNumb2 > randomNumb1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
    
}