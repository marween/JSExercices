//Create a function named average(arr) that takes an array of numbers as argument 
//and returns the average.

//Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

//Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

//Create a program that asks a number to the user then generate that same amount of random numbers 
//but also displays their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) 
//function created in Exercise 3.
const readlineSync = require("readline-sync");

var choosen = parseInt(readlineSync.question("Choose a number "));
var array = [];
var somme=0;

// fonction qui génére un nombre aléatoire
function rand10(){
	return Math.floor((Math.random() * 10 ) +1) ;
}

// fonction qui met dans un tableau un nombre n de nb aleatoire.  n étant le choix de l'utilisateur 
function multiRand(n) {

	for(var i=0; i<n; i++){
		array.push(rand10());
	}
	return array;
}

// fonction qui calcule la moyenne dans un tableau
function average(arr){

	for(var i=0; i<arr.length; i++){		
		somme += arr[i];
	}
	return somme/arr.length;   
}

// fonction générique qui va chercher le min dans le tableau
function min (arr){
	console.log(Math.min(...arr));
};

// fonction générique qui va chercher le max dans le tableau
function max (arr){
	console.log(Math.max(...arr));
}



console.log(multiRand(choosen)); // appel de la fonction 
console.log(average(array)); // appael de la fonction qui calcule la moyenne
min(array);
max(array);