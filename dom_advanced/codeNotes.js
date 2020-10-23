// HIGH ORDER FUNCTIONS calculator

/// HIGHER ORDER FUNCTION = a Function that takes as an element another function
// Operator is a function that can take the role of the function above it
/// You are expecting a function instead of "operator"

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  // this is the high order function
  return operator(num1, num2);
}

calculator(5, 4, division); // in this case, "division" is the Function that works as Operator

// Select a series of buttons

var listLength = document.querySelectorAll(".drum").length; // list button length

for (var i = 0; i < listLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // i is substituting the index of the array of button elements
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    this.style.color = "white"; // select the button that has been clicked
  });
}

// OBJECTS und CONSTRUCTOR FUNCTION

function HouseKeeper(name, workPermit, age, languages) {
  // the factory
  this.name = name;
  this.workPermit = workPermit;
  this.age = age;
  this.languages = languages;
  this.clean = function () {
    alert("Cleaning in progress..");
  };
} // the Constructor Function is a function that construct Objects

var houseKeeperNonna = new HouseKeeper("Ada", false, 23, [
  "German",
  "Norvegian",
]); // a newly produced Object

houseKeeperNonna.clean(); // to call the function "clean"

// Factory + GetProperty and SetProperty without touching the original Object
function Car(brand, color, numOfDoors, engine) {
  this.brand = brand;
  this.color = color;
  this.numOfDoors = numOfDoors;
  this.engine = engine;
  this.drive = function () {
    alert("the car drives");
  };
  this.getEngine = function () {
    return this.engine;
  };
  this.setEngine = function (engine) {
    this.engine = engine;
  };
}

function Person(name, age) {
  //  constructor --> factory of object
  this.name = name;
  this.age = age;
  this.yearBorn = new Date().getFullYear() - age;
  this.sayHi = function () {
    alarm(`Hi, I am ${this.name}!`); // `Hi, I am ${this.name}!` --> "Hi, I am " + this.name + "!"
  };
}

function GoogleAnalytics(api) {
  this.event = () => {};
}

const GA = new GoogleAnalytics(api);

GA.event();

const daniele = new Person("Daniele");
daniele.age = 4;
daniele.musicTaste = "";

const bogdan = new Person("Bogdan");
bogdan.age = 15;

const dragos = new Person("Dragos");
dragos.age = 19;

// New Car
var golf = new Car("Volkswagen", "grey", 5, "Benzin");

golf.setEngine("Diesel");
golf.engine = "Diesel"; // This is bad.

// CHANGE BUTTONS ON emp.de BY mouseover THE MENU BAR

var listMenubar = document.querySelectorAll("a.has-sub-menu").length;

for (var i = 0; i < listMenubar; i++) {
  document
    .querySelectorAll("a.has-sub-menu")
    [i].addEventListener("mouseover", function () {
      var x = this;
      x.innerHTML = "cacca";
    });
}

// il Giornale.it - menubar + dropdown

var listHrefToChange = document
  .getElementsByClassName("block block-system block-menu")[0]
  .querySelectorAll("a").length;
var listNolength = document
  .getElementsByClassName("block block-system block-menu")[0]
  .querySelectorAll("a");

for (var i = 0; i < listHrefToChange; i++) {
  listNolength[i].addEventListener("mouseover", function () {
    var x = this;
    this.innerText = "cacca";
  });
}

// Super Geiles Beispiel für der Epitethos Macher https://stackoverflow.com/questions/43423458/use-string-includes-in-switch-javascript-case

function classify(string) {
  var category = categorize(string);
  switch (category) {
    case "product":
      console.log("this is a product");
      break;
    case "user":
      console.log("this is a user");
      break;
    default:
      console.log("category undefined");
  }
}

function categorize(string) {
  if (string.includes("product")) {
    return "product";
  }
  if (string.includes("user")) {
    return "user";
  }
}

classify("product789");
classify("user123");
classify("test567");

// Application - mouseover - recognise text auf Giornale.it TEXT RECOGNITION "Conte"

var listHrefToChange = document.querySelectorAll("a").length;
var listNolength = document.querySelectorAll("a");

for (var i = 0; i < listHrefToChange; i++) {
  listNolength[i].addEventListener("mouseover", function () {
    var selectInnerHTML = this.innerHTML;

    var category = categorize(selectInnerHTML); // this variable contains the return from function categorize(selectInnerHTML)

    switch (category) {
      case "Conte":
        console.log("si parla di Conte");
        break;
      case "M5s":
        console.log("Si parla dei 5 Stelle");
        break;
      default:
        console.log("category undefined");
    }
  });
  function categorize(selectInnerHTML) {
    // this is the function

    if (selectInnerHTML.includes("Conte")) {
      return "Conte";
    }
    if (selectInnerHTML.includes("M5s")) {
      return "M5s";
    }
  }
}

// Make all Paragraphs in Red

var allP = document.querySelectorAll("p").length;

for (var i = 0; i < allP; i++) {
  document.querySelectorAll("p")[i].style.color = "red";
}

// setTimeout

var name = prompt("what is your name?");

console.log("I am processing your request...");

setTimeout(function () {
  console.log("your name is " + name);
}, 6000);

// NOTES: Function

const product1Netto = 10;
const product2Netto = 5;
const product3Netto = 5;
const product4Netto = 5;
const product5Netto = 5;
const product6Netto = 5;
const product7Netto = 5;
const product8Netto = 5;

function sayGoodMorning() {
  // reusable code
  alert("Hi there, happy " + new Date());
}
