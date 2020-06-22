// Twitter Text Character Counter

var textInput = prompt("Please, compose your tweet");

console.log(textInput.length);

var leftChar = 280 - textInput.length;

console.log(leftChar);

alert(
  "You have written " +
    textInput.length +
    " characters, you have " +
    leftChar +
    " left"
);

/// VERSION WITH SLICE

var tweet = prompt("Please, write your tweet here!");

var tweetMaxlenght = 280 - tweet.length;

alert("you have only " + tweetMaxlenght + "  charachters left");

var tweetSliced = tweet.slice(0, 280);

console.log(tweetSliced.length);

alert("THIS IS YOUR TWEET:     " + tweetSliced);


// Upper Case - Lower Case + Slice 

var name = prompt("what is your name?");

var standardChar = name.slice(0,1).toUpperCase() + name.slice(1, name.length).toLowerCase();

console.log(standardChar);

alert("your name is " + standardChar)

// Dog Human Age

var dogAge = prompt("Hey, wie alt ist dein Hund?");

var humanAge = ((dogAge - 2) * 4) + 21; 

alert("if your dog wäre eine Person, er würde " + humanAge + " alt sein");

// Functions  ROBOT SHOPPING //

function getMilk(dollars) { 
  var bottles =  Math.floor(dollars / 1.5); 
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("buy " + bottles + " bottles of milk" );
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");
  }
  
  getMilk(7);

  // LifeLeft to live if you die with 90 years old

  function lifeLeft(age) {
       
    var age = prompt("how old are you?");
  
    //console.log("you have left " + (90 - age)*365 + " days, "  + (90 - age)*52 + " weeks, and " + (90 - age)*12 + " months");    
     
    alert("you have left " + (90 - age)*365 + " days, "  + 
    (90 - age)*52 + " weeks, and " + (90 - age)*12 + " months");        
    
  }

    lifeLeft(age);

    // *** Fuction with Arguments + Return *** //

    function getMilk(dollars) { 

      var dollars = prompt("I give you this amount of money")
      var bottles =  Math.floor(dollars / 1.5); 
       console.log("leaveHouse");
       console.log("moveRight");
       console.log("moveUp");
       console.log("buy " + bottles + " bottles of milk" );
       console.log("moveRight");
       console.log("moveLeft");
       console.log("moveDown");
       console.log("moveLeft");
       console.log("enterHouse");
       alert("Dear Master, ich bin ein Hamsterkäufer: I bought " + bottles + " bottles of milk" );
       return dollars % 1.5; // rest after buying the milk
     }
     
     getMilk();

     // EXAMPLE WITH var change

     function getMilk(dollars) { 

      var dollars = prompt("I give you this amount of money")
      var bottles =  Math.floor(dollars / 1.5); 
       console.log("leaveHouse");
       console.log("moveRight");
       console.log("moveUp");
       console.log("buy " + bottles + " bottles of milk" );
       console.log("moveRight");
       console.log("moveLeft");
       console.log("moveDown");
       console.log("moveLeft");
       console.log("enterHouse");
       alert("Dear Master, ich bin ein Hamsterkäufer: I bought " + bottles + " bottles of milk" );
       return dollars % 1.5;
     }
     
    var change = getMilk();
   alert("I have " + change + "of change");
   
   // EXAMPLE WITH FUNCTION WITHIN A FUNCTION

   
   //var dollars = prompt("I give you this amount of money")
   //var bottles =  Math.floor(dollars / 1.5); 
   console.log("leaveHouse");
   console.log("moveRight");
   console.log("moveUp");
   console.log("buy " + calcBottles(dollars, 1.5) + " bottles of milk" );
   console.log("moveRight");
   console.log("moveLeft");
   console.log("moveDown");
   console.log("moveLeft");
   console.log("enterHouse");
   alert("Dear Master, I bought " + calcBottles(dollars, 1.5) + " bottles of milk" );
   return calcChange(dollars, 1.5);
 }
 function calcBottles(startingMoney, costPerBottle){
   var numbOfBottles =  Math.floor(startingMoney / costPerBottle);
   return numbOfBottles;
 }

 function calcChange(startingAmount, costPerBottle){
   var change = startingAmount % 1.5;
   return change;
 }

alert("I bring u back " + getMilk(1.5) + " dollars")

// TOTAL FUNCTIONS

function getMilk(dollars, costPerBottle) { 

  //var dollars = prompt("I give you this amount of money")
  //var bottles =  Math.floor(dollars / costPerBottle); 
   console.log("leaveHouse");
   console.log("moveRight");
   console.log("moveUp");
   console.log("buy " + calcBottles(dollars, costPerBottle) + " bottles of milk" );
   console.log("moveRight");
   console.log("moveLeft");
   console.log("moveDown");
   console.log("moveLeft");
   console.log("enterHouse");
   alert("Dear Master, I bought " + calcBottles(dollars, costPerBottle) + " bottles of milk" );
   return calcChange(dollars, costPerBottle);
 }
 function calcBottles(startingMoney, costPerBottle){
   var numbOfBottles =  Math.floor(startingMoney / costPerBottle);
   return numbOfBottles;
 }

 function calcChange(startingAmount, costPerBottle){
   var change = startingAmount % costPerBottle;
   return change;
 }

alert("I bring u back " + getMilk(4, 1) + " dollars")  // your input it is coming only here! :)

// Viking rade example

// Organise your rade
//1 ship carries 40 men - each man needs 1 axe 
 //

 function calcEquipment(numMen) {
  console.log(numMen + " men are joining your raid");
  console.log("you need " + calcShips(numMen) + " ships");
  console.log("and " + calcWeapons(numMen) + " axes");
}

function calcShips(numMen){
  var ships = Math.floor(numMen / 40);
  return ships;
}

function calcWeapons(numMen){
  var axes = Math.floor(numMen * 3);
  return axes;
}


calcEquipment(100);

// BMI CALCULATOR
//The first parameter should be the weight and the second should be the height.
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
var bmi = bmiCalculator(65, 1.8); 
bmi should equal 20 when it's rounded to the nearest whole number.
*/

function bmiCalculator(yourWeight, yourHeight){
  var bmiNum = yourWeight/ (Math.pow(yourHeight, 2));
  return Math.round(bmiNum);
}


var bmi = bmiCalculator(60, 1.7); 
console.log(bmi);

