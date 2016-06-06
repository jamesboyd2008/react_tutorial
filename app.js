// var print = require('./exports_refresher');
// print('testaroni jabroni');

var operation = require('./calculator');
var colors = require('colors');

// console.log("Addition: " + operation['+'](5, 6));
// console.log("Subtraction: " + operation['-'](5, 6));
// console.log("Multiplication: " + operation['*'](5, 6));
// console.log("Division: " + operation['/'](5, 6));

// refactored:
// var mathWords = ["Addition", "Subtraction", "Multiplication", "Division"];
//
// Object.keys(operation).forEach(function(key, index){
//   console.log(mathWords[index] + ': ' + operation[key](5, 6));
// });
console.log('\u{2192} node examples/normal-usage.js');
console.log('First some yellow text'.yellow);
console.log('Underline that text'.yellow.underline);
console.log('Make it bold and red'.red.bold);
console.log('Double Rainbows All Day Long'.rainbow);
console.log('drop the base'.trap);
console.log('drop the rainbow base'.trap.rainbow);
console.log('Chains are also cool'.underline.red);
console.log('America'.america);
// console.log(''.);
// console.log(''.);
// console.log(''.);
// console.log(''.);
