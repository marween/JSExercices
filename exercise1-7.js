const readlineSync = require("readline-sync");

let number1 = readlineSync.question('What is your shoes size?');
let number2 = readlineSync.question('What is your birth year?');

console.log(((((number1*2)+5)*50)-number2)+1766);