const readlineSync = require("readline-sync");

let number = readlineSync.question("What's your favorite number ? ");

while( number != 42 ){

	console.log("try again ! " ); 
	 number = readlineSync.question("What's your favorite number ? ");
	

	
}




