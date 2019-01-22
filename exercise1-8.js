const readlineSync = require("readline-sync");

let name = readlineSync.question("Bonjour, quel est ton nom?");
console.log("4 questions restantes");
let birthday = readlineSync.question("Quel est ta date de naissance?");
console.log("3 questions restantes");
let city = readlineSync.question("D'où viens-tu?");
console.log("2 questions restantes");
let job = readlineSync.question("Tu travailles dans quoi?");
console.log("1 question restante");
let passion = readlineSync.question("Quelle est ta passion?");
console.log("Bonjour "+name+" qui vient de "+city+". Tu es né le "+birthday+ " et tu es "+job+". Tu es passionné de "+passion+".");
