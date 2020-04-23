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

// ADVANCED BMI

function bmiCalculator (weight, height) {
    var bmiNum = Math.floor(weight / Math.pow(height, 2));
    console.log(bmiNum);
    if (bmiNum < 18.5 ) {
      var interpretation = " your BMI is " + bmiNum + " so you are underweight"
    }
    if(bmiNum > 18.5 && bmiNum < 24.9){ 
       interpretation = "your BMI is " + bmiNum + " so you have a normal weight"
    } 
    if (bmiNum > 24.9) {
      interpretation = "your BMI is " + bmiNum + " you are overweight"
    }
    return interpretation;
}
bmiCalculator(60, 2);

// LEAP YEAR - IF UND ELSE

function isLeap(year) {
    
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "it IS a leap year"
            }
            else {
                return "it is NOT a leap year";
            }
    
        } else {
            return "it is NOT a leap year";
        }
    }
        else {
        return "it is NOT a leap year";
    } 
    }
    
    isLeap(2000);