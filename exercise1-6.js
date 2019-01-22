
const readlineSync = require("readline-sync");

let number1 = Math.round(readlineSync.question('Please, give me a decimal number.'));
let number2 = readlineSync.question('Give me another decimal number.');
let number3 = Math.round(number1%number2);


console.log(number3);