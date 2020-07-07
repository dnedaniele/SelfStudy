const express = require("express");
const { response } = require("express");

const app = express();

app.get("/", function (req, res) {
res.send("Hello homePage")
})

app.get("/contact", function (req, res) {
    res.send("please contact me to this email: daniele@daniele.com")
})

app.get("/about", function (req, res) {
    res.send("<h1>ABOUT this is an example of response</h1>")
})

app.listen(3500, function() {
    console.log("Server is running on 3500")
} )