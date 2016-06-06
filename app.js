// var print = require('./exports_refresher');
// print('testaroni jabroni');

var operation = require('./calculator');

console.log("Addition: " + operation['+'](5, 6));
console.log("Subtraction: " + operation['-'](5, 6));
console.log("Multiplication: " + operation['*'](5, 6));
console.log("Division: " + operation['/'](5, 6));
