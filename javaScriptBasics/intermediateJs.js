// Love Calculator
// 1.input ur name 2. input loved one's name 3. alert with numebr between 0-100

var yourName = prompt("what is your name?");
var otherName = prompt("how is called the person you like?")

function loveCalc(){
    var loveScore = Math.random();
    loveScore = Math.floor((loveScore * 100) +1);
    return loveScore;
}

var matchalert = alert("this is the likelihood from 0 to 100 that you and " + otherName + " can be together: " + loveCalc())


// Love Calculator WITH IF AND ELSE
// 1.input ur name 2. input loved one's name 3. alert with numebr between 0-100

var yourName = prompt("what is your name?");
var otherName = prompt("how is called the person you like?")

function loveCalc(){
    var n = Math.random();
    n = Math.floor((n * 100) +1);
    return n;
}

if (loveCalc() > 60) {
    alert(otherName + " is totally fond of you!")
}else {
    alert("you have to fight for " + otherName + "s love")
}

