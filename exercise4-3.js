const readlineSync = require("readline-sync");

var choosen = parseInt(readlineSync.question("Choose a number "));
var array = [];

// fonction qui crée un nombre aleatoire de 0 à 10
function rand10(){
		return Math.floor((Math.random() * 10 ) +1) ;
}

// fonction  qui parcour le tableau et qui met fans le tableau les nombre aleatoire
function multiRand(n) {
 
 	for(var i=0; i<n; i++){
		array.push(rand10());
 	}
 	return array;
 }

// appelle de la fonction qui met dans le tableau le nombre n * nb aleatoire
console.log(multiRand(choosen));