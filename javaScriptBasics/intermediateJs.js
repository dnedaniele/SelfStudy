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

    //GUEST LIST - arrays + if else

    var guestList = ["Kunigunde", "Erik", "Wolfgang", "Brunhild", "Daniele", "Joana"];

    var newGuest = prompt("what is your name?");
    console.log(typeof newGuest);
    
    if (guestList.includes(newGuest) === true ) {
        alert("Welcome to the Party!");
    } else {
        alert("Unfortunately you are not invited!");
    }
    
// Increasing number count - piramid in Console - with the Console testen not with console.log

var output = [];
 var count = 1;

function fizzBuzz() {
    output.push(count + 1);
    // oder  output.push(count++); 
    console.log(output);
}

// FIZZBUZZ 
var output = [];
 var count = 1;

function fizzBuzz() {
   if (count % 5 === 0 && count % 3 === 0 ){
            output.push("FizzBuzz"); }
   else if (count % 3 === 0 ){
           output.push("Fizz"); 
        }else if(count % 5 === 0 ){
            output.push("Buzz"); 
        }
        else {
          output.push(count);
        }
    count++;
    console.log(output);

}
// WHO'S PAYING Function

function whosPaying(names) {
    var names = ["Angela", "Ben","Michael", "Cloe", "Jenny"];
   var numberofPeople = names.length;
    var personNum = (Math.random() * names.length);
        personNum = Math.floor(personNum);
    var randomPerson = names[personNum];
       return randomPerson + " is going to buy the lunch today";
   }
   
// FIZZBUZZ with a WHILE LOOP
var output = [];
 var count = 1;

function fizzBuzz() {

    while (count <= 100) {

        if (count % 5 === 0 && count % 3 === 0 ){
            output.push("FizzBuzz"); }
   else if (count % 3 === 0 ){
           output.push("Fizz"); 
        }else if(count % 5 === 0 ){
            output.push("Buzz"); 
        }
        else {
          output.push(count);
        }
    count++;

    }
   console.log(output);
}

// 99 Bottles of beer on the wall

var rhyme = [];
 var count = 99;

function beer() {

    while (count > 1) {

    rhyme.push(count + " bottles of beer on the wall, " + count +" bottles of beer.");
    count--;
    rhyme.push("Take one down and pass it around, " + count + " bottles of beer on the wall.")
    }

    rhyme.push("1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.");
    
   console.log(rhyme);
    
}

//// WHILE LOOP : STATE - it repeats a function if a certain state is true or constant
//// FOR LOOP : ITERATE - it repeats a function as many time as decided by you

/// i.e. While Loop: you hit on a girl forever regardless success or failure: as long as the status "the girl is with you" === TRUE
var x = "girl" === "girlfriend";
boolean(x);

function hitOnher(){
  while( x === false ) {
    console.log("hit on her");  //!warning! infinite loop 
  }
}

hitOnher();

/// i.e. For Loop: you hit on a girl 10 times and then you give up and get Tinder: for (var i = 0; i < 10; i++) {}

const x = "girl";

function hitOnher(){
  for(var i=0; i < 10; i++ ) {
    console.log("hit on her");   
  }
  console.log("fuck it! I get Tinder!")
}

hitOnher();

// FOR LOOP - EXAMPLE Birthday Lifting Chair

var numbOfLifts = prompt("how old are you becoming today?");

function liftTheChair() {
    for(i = 1; i <= numbOfLifts; i++) {
        console.log("call loud " + i );
        console.log("Lift the chair");
    }
}
liftTheChair();
//