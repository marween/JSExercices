/*
Create a function named askTvSerie() 
that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a 
TV serie object and display it to the user in JSON format.
*/


// essaie de la nouvelle façon :

const readlineSync = require("readline-sync");

let myObject = {
		serie :"",
		production:"",
		acteur:[]
	}

let askTvSerie = ()=>{
	let a = "";	
	myObject.serie = readlineSync.question("quelle est ta série préférée? ");
	myObject.production = readlineSync.question("quelle est son année de production ? ");
		// = -> on écrit dans la variable 
		// == -> on compare 2 variables il va les convertir puis comparer
		// === -> on compare 2 variables strictes il compare juste

		while(a = readlineSync.question("quelle est ton acteur préféré ? ")){
			myObject.acteur.push(a);
		}
	console.log(a);
	return myObject;
};



console.log(askTvSerie(myObject));



