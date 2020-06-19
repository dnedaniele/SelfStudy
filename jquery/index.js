

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

// Add Elements in the DOM

$("h1").before("<button>New</button>");  //before

$("h1").after("<p>After Paragraph the H1</p>"); // after

$("p").prepend("<button>prepend</button>  ");  // prepend
$("p").append("  <button>append</button>");  // append

// remove an Element form the DOM

// $("a").remove();

// Animation

$("h2").on("click", function(){  //hide
$("h1").hide();
})

//$("h2").on("mouseover", function(){  // Fade out
//    $("h1").fadeOut();   // oder  $("h1").fadeIn();
//})

$("h3").hide();

$("h4").on("click", function(){
    $("h3").show();
})

// Concatenate Animations

$("h4").on("click", function(){
    $("h3").show().slideDown().animate({opacity: 0.5}).slideUp();
});