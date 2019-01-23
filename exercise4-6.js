
/*
Create a function factorial(a) that returns the factorial of a number.
That function must be recursive.
In mathematics, the factorial of a positive integer n, denoted by n!,
is the product of all positive integers less than or equal to n. For example,
5! = 5*4*3*2*1 = 120
https://onechapteraday.fr/javascript-recursive-functions/
https://bytearcher.com/articles/equality-comparison-operator-javascript/
https://openclassrooms.com/fr/courses/438849-la-recursivite
*/
const readlineSync = require("readline-sync");
var choosen = parseInt(readlineSync.question("Choose a number "));

/*function factorial(x) {
  var result = 1;
  for (var i = 1; i <= x; i++)
    result = result * i;
  return result;
}


console.log(factorial(choosen)); // output : 120)
*/


function factorial(x) {
  // This is the base case.
  if (x === 0) return 1;
  // This is the recursive one.
  else return x * factorial(x - 1);
}

console.log(factorial(choosen)); // output : 120)


