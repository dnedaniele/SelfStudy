
// HIGH ORDER FUNCTIONS calculator

function add (num1, num2){
    return num1 + num2;
}

function multiply (num1, num2) {
return num1 * num2;
} 

function subtract (num1, num2) {
    return num1 - num2;
}

function division (num1, num2){
    return num1 / num2;
}

function calculator (num1, num2, operator){    // this is the high order function
    return operator(num1, num2);
}

calculator(5,4, division);




// Select a series of buttons

var listLength = document.querySelectorAll(".drum").length;  // list button length

for (var i = 0; i < listLength ; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
            // i is substituting the index of the array of button elements
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            this.style.color = "white";  // select the button that has been clicked
        });
        
    }

    // OBJECTS und CONSTRUCTOR FUNCTION

    function HouseKeeper (name, workPermit,age, languages) {  // the factory
        this.name = name;
        this.workPermit = workPermit;
        this.age = age;
        this.languages = languages;
    }

var houseKeeperNonna = new HouseKeeper("Ada",false,23,["German", "Norvegian"]);  // a newly produced Object

// Factory
function Car (brand, color, numOfDoors, engine) {
    this.brand = brand;
    this.color = color;
    this.numOfDoors = numOfDoors;
    this.engine = engine;
}

// New Car
var golf = new Car ("Volkswagen","grey",5,"Benzin");
  
