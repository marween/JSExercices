/*
Create a function named randomizeCast(tvSerie) 
that will take as argument the data structure you defined in the previous 
exercise and return a list of the same cast but in a random order.

Create a program that will use 
randomizeCast(tvSerie) and askTvSerie() 
to ask the user about a TV serie then display a 
randomized list of the previous cast that will form the new cast of your next serie.

*/
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

		return myObject;
	};

	let randomizeCast = (tvSerie)=>{
		let i = 0 ;
		let j = 0 ;
		for (let elem in tvSerie.acteur) {
			
			i=tvSerie.acteur.length-1;
			j = Math.floor(Math.random() * (i + 1));

			temp = tvSerie.acteur[i];
			tvSerie.acteur[i] = tvSerie.acteur[j];
			tvSerie.acteur[j] = temp;
			
			return tvSerie.acteur;
		}
	}

	console.log (askTvSerie());
	console.log (randomizeCast(myObject));
