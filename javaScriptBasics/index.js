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

console.log(standardName);

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

