/*document.querySelector(".w").addEventListener("click", function() {
    alert("ciao biondo!")
});*/

// ** Give an Event Listener to All Button Elements

var listLength = document.querySelectorAll(".drum").length;  // list button length

for (var i = 0; i < listLength ; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () { // i is substituting the index of the array of button elements
            alert("mi hai cliccato")
        });
        
    }


 
