const readlineSync = require("readline-sync");
let n = parseInt((readlineSync.question("Give me a number  ")));
var somme=0;

for (var i = 1; i <= n; i++) {
	
  let number = parseInt((readlineSync.question("Give me a number to add ")));

  somme += number; //somme = somme + number
}


console.log(somme);





