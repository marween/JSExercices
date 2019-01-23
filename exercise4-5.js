//Create a function named calcDistance which takes the coordinates 
//of two different points A and B in a 2D space. 
//That function must return the distance between those two points.

//Create a program to use that function.

//Note: You probably need to make some 
//search on Google to learn the mathematical formula to do that. 
//You will also probably need to search for useful functions in JavaScript to help you making complex mathematical formulas...

const readlineSync = require("readline-sync");



let coordx1 = readlineSync.question("Give me coordonate X1: ");
let coordy1 = readlineSync.question("Give me coordonate Y2: ");
let coordx2 = readlineSync.question("Give me coordonate X2: ");
let coordy2 = readlineSync.question("Give me coordonate y2: ");

function calcDistance(x1,y1,x2,y2){
	 let a = x1 - x2;
     let b = y1 - y2;
    
    return Math.sqrt( a*a  + b*b );
    // Math.hypot(x2-x1,y2-y1)
	
}

console.log(calcDistance(coordx1,coordy1,coordx2,coordy2));
