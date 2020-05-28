/*document.querySelector(".w").addEventListener("click", function() {
    alert("ciao biondo!")
});*/

// ** Give an Event Listener to All Button Elements

// DETECTING BUTTON PRESS

var listLength = document.querySelectorAll(".drum").length;  // list button length

for (var i = 0; i < listLength ; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
            
            var buttonInnerHTML = this.innerHTML;  // on what are we looking at to switch

            makeSound(buttonInnerHTML);

        });
        
    }

    // DETECTING KEYBOARD PRESS

    document.addEventListener("keydown",function (event) {
        makeSound(event.key)
    });

function makeSound (key) {

    switch (key) {
        case "w":                          // we switch when the innerHTML oder key is "w", "a", ...
        var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
            var tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
        break;
        case "s":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
        break;
        case "d":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "j":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
        break;
    default: console.log(buttonInnerHTML);
        break;
}
    
}
 