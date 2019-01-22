const readlineSync = require("readline-sync");

let min = parseInt(readlineSync.question('Please, give me a number.'));
let max = parseInt(readlineSync.question('Please, give me another number.'));
let current = parseInt(readlineSync.question('Please, give me one last number.'));


if (min>max) {
    console.log("Error first number must be < second number! Try again.");
}
else {
  if ((min< current)&&(current < max)) {
    console.log("Your last number was between "+min+" and "+max+".");
  }
  else {
    console.log("Your last number was not between "+min+" and "+max+".");
  }
}