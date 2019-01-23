const readlineSync = require("readline-sync");

function calcSurface(a,b){
	console.log(a*b);
}

let width = parseInt(readlineSync.question("Give me the width of your rectangle: "));
let length = parseInt(readlineSync.question("Give me the length of your rectangle: "));

calcSurface(width,length);

/*
const readlineSync = require("readline-sync");

let calcSurface = (l,w) =>{
  return l*w;
}

let l= readlineSync.question("What's the length of the rectangle ?");
let w= readlineSync.question("What's the with of the rectangle?");

console.log("The surface of the rectangle is " + calcSurface(parseInt(l),parseInt(w)));


*/