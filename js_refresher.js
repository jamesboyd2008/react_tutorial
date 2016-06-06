// var variable = "This here string."
// console.log(variable);
// console.log("Length:" + variable.length);
// console.log("Index 5:" + variable[5]);
//
// for (var x = 0; x < variable.length; x++) {
//   console.log("character: " + variable[x]);
// }
//
// var num = 6;
// var string6 = '6';
// console.log(parseInt(string6) + 6);
//
// if (true == false) {
//   console.log("no seeum");
// } else if (true == true) {
//   console.log('yippe skippy!')
// }
//
// var Vehicle = function(make, model, year) {
//   var self = this;
//   this.make = make;
//   this.model = model;
//   this.year = year;
//
//   if (year <= 1970) {
//     this.missionCapable = false;
//   } else {
//     this.missionCapable = true;
//   }
//
//   this.wreck = function() {
//     self.missionCapable = false;
//   }
// }
//
// var brownCar = new Vehicle('ford', 'shit mobile', '1971');
// console.log("Da car: " + brownCar.year + ' ' + brownCar.make + ' ' + brownCar.model)
// console.log('Does it run? => ' + brownCar.missionCapable)
// brownCar.wreck();
// console.log('there was an accident');
// console.log("Does it run anymore? => " + brownCar.missionCapable);
//
// this.car = "Shitmobile";
//
// var shitGarage = {
//   car: "Shitwagon",
//   getCar: function() {
//     return this.car;
//   }
// };
//
// console.log(shitGarage.getCar());
// var shitVar = shitGarage.getCar;
// console.log(shitVar());
// var goodVar = shitGarage.getCar.bind(shitGarage);
// console.log(goodVar());
//
// var readline = require('readline-sync');
// var name = readline.question("Donde estas tu nombre?");
// console.log("Your name is " + name);
//
// var readline = require('readline-sync');
// var num1 = parseInt(readline.question("Num1? "));
// var num2 = parseInt(readline.question("Num2? "));
// var operator = readline.question("Operation? ");
//
// var operation = {
//   '+': function(a, b) {
//     return a + b;
//   },
//   '-': function(a, b) {
//     return a - b;
//   },
//   '*': function(a, b) {
//     return a * b;
//   },
//   '/': function(a, b) {
//     return a / b;
//   }
// }
//
// console.log(operation[operator](num1, num2));
