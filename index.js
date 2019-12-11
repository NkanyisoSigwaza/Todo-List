const express = require("express");
var todoController = require("./todoController");


var app = express();

// set up templates engine

app.set("view engine","ejs");



todoController(app);

// listen to port
app.listen(3000);
console.log("you are listening to port 3000")
