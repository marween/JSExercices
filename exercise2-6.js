const readlineSync = require("readline-sync");

let number = parseInt((readlineSync.question("Give me a number between 1 and 7 ? ")));
var days = new Object();

days[1] = "Monday";
days[2] = "tuesday";
days[3] = "Wednesday";
days[4] = "thursday";
days[5] = "Friday";
days[6] = "Saturday";
days[7] = "Sunday";


for ( association in days){
	console.log (number + "correspond au jour de la semaine:" + days[number]);break;
}