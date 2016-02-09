var express = require('express');
var app = express();

var PORT = 8080;

app.listen(PORT, function (){
  console.log("listening");
})

app.get("/", function(req, res){
  res.sendFile(process.cwd() + "/home.html");
})

app.get("/addition/:num1/:num2", function(req, res){
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var sum = parseInt(num1) + parseInt(num2);
  var sumString = sum.toString();
  res.send(sumString);
})

app.get("/substraction/:num1/:num2", function(req, res){
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var sum = parseInt(num1) - parseInt(num2);
  var sumString = sum.toString();
  res.send(sumString);
})

app.get("/multiply/:num1/:num2", function(req, res){
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var sum = parseInt(num1) * parseInt(num2);
  var sumString = sum.toString();
  res.send(sumString);
})

app.get("/divide/:num1/:num2", function(req, res){
  var num1 = req.params.num1;
  var num2 = req.params.num2;
  var sum = parseInt(num1) / parseInt(num2);
  var sumString = sum.toString();
  res.send(sumString);
})