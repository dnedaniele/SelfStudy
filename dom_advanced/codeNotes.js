
// HIGH ORDER FUNCTIONS calculator

/// HIGHER ORDER FUNCTION = a Function that takes as an element another function
 // Operator is a function that can take the role of the function above it
                /// You are expecting a function instead of "operator"

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

calculator(5,4, division);  // in this case, "division" is the Function that works as Operator




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
        this.clean = function() {
            alert("Cleaning in progress..");
        }                                                   
    }                                          // the Constructor Function is a function that construct Objects

var houseKeeperNonna = new HouseKeeper("Ada",false,23,["German", "Norvegian"]);  // a newly produced Object

houseKeeperNonna.clean();  // to call the function "clean"

// Factory
function Car (brand, color, numOfDoors, engine) {
    this.brand = brand;
    this.color = color;
    this.numOfDoors = numOfDoors;
    this.engine = engine;
    this.drive = function() {
        alert("the car drives");
    }
}

// New Car
var golf = new Car ("Volkswagen","grey",5,"Benzin");
  


// CHANGE BUTTONS ON emp.de BY mouseover THE MENU BAR

var listMenubar = document.querySelectorAll("a.has-sub-menu").length;

for( var i = 0; i < listMenubar; i++)  {
   
document.querySelectorAll("a.has-sub-menu")[i].addEventListener("mouseover", function(){
 
var x = this;
x.innerHTML = "cacca";
  
});
    
    
}

// il Giornale.it - menubar+ dropdown 


var listHrefToChange= document.getElementsByClassName("block block-system block-menu")[0].querySelectorAll("a").length;
var listNolength =document.getElementsByClassName("block block-system block-menu")[0].querySelectorAll("a")

for (var i = 0; i <listHrefToChange; i++)  {
 listNolength[i].addEventListener("mouseover",function(){
   var x = this;
   this.innerText = "cacca";
 });
}

// Super Geiles Beispiel für der Epitethos Macher https://stackoverflow.com/questions/43423458/use-string-includes-in-switch-javascript-case

function classify(string){
    var category = categorize(string);
    switch (category) {
      case 'product':
        console.log('this is a product');
        break;
      case 'user':
        console.log('this is a user');
        break;
      default:
        console.log('category undefined');    
    }
  }
  
  function categorize(string){
    if (string.includes('product')){
      return 'product';
    }
    if (string.includes('user')){
      return 'user';
    }
  }
  
  classify("product789");
  classify("user123");
  classify("test567");