//jshint esversion:6


// NODEJS API FILE SYSTEM

//    const fs = require("fs");

//https://nodejs.org/api/fs.html  fs.copyFileSync(src, dest[, mode])

//    fs.copyFileSync("file1.txt","fileCopyOf1.text");


//NPM SUPERHEROES

   var superheroes = require("superheroes");

  var myHero = superheroes.random();

  console.log("My superhero is " + myHero);


// NPM SUPER VILLAINS

var supervillains = require("supervillains");

var mySuperVillains = supervillains.random();

console.log("my super villains is " + mySuperVillains);