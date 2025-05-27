//task 1
const {calculator, filter} = require("./calculator");

console.log(calculator(10, 5, 'substract'));
console.log(calculator(30, 5, 'add'));
console.log(calculator(20, 2, 'multiply'));
console.log(calculator(100, -4, 'divide'));

//we use module.exports to share code from one file so it can be used in another file.
//we use require() to import this code on this file.

//task 2
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const isOdd = (num) => num % 2 === 1;  
console.log(filter(nums, isOdd)); 