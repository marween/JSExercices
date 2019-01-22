const readlineSync = require("readline-sync");

function calcSurface(a,b){
	console.log(a*b);
}

let width = parseInt(readlineSync.question("Give me the width of your rectangle: "));
let length = parseInt(readlineSync.question("Give me the length of your rectangle: "));

calcSurface(width,length);