

$("h1").addClass("big-title margin-50"); // Add Class
$("a").addClass("search-text");


$("h1").text("Bye");                 //innerText
$("a").text("Search in the Browser");


$("button").html("<em>Hey</em>"); //innerHTML


$("a").attr("href", "https://www.berlin.de/en/")  //change or add attribute


$("h1").click(function(){            // add Event Listener click
    $("h1").css("color", "purple");
});


$("button").click(function(){     // Add Event Listener without for Loop
$("h1").css("color", "green");
});   

$("input").keydown(function(event) {   // Event Listener - keydown
console.log(event.key);
});

$(document).keydown(function(event){    // Event Listener - keydown whole document
    console.log(event.key);
});

$(document).keydown(function(event){   // Write on the DOM your Event.Key
   $("h1").text(event.key); 
});

// Easier Event Listener Techinique  ON

$("a").on("mouseover", function(){
    $("a").addClass("mouse-over");
});