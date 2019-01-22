const readlineSync = require("readline-sync");
let number1 = Math.round(readlineSync.question('Please, give me a decimal number.'));
let number2 = readlineSync.question('Please, give me another decimal number.');
console.log(number1 * number2);