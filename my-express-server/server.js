//jshint esversion:6

const express = require("express");
const { response } = require("express");

const app = express();

app.get("/", function(request, response){
//console.log(request);
response.send("<h1> this is My Hompage - Hello World!</h1>");
});

app.get("/contact", function(request, response){
    response.send("<h1>this is my contact list</h1> <br> <ul><li>Telephone<li><li>Adress<li><li>E-mail<li></ul>")
})

app.get("/about", function(request, response) {
    response.send("<h1>this is the website of Daniele</h1><br><h2>Daniele is learning ExpressJS</h2>")
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
});