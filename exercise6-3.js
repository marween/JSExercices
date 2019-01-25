/*
Create a program that will re-use the Rectangle class you created previously. 
It should generate 1000 random instances of Rectangle with random positions and sizes. 
Then it will display all colliding rectangles amongst those that were generated that way.
*/
class Rectangle {
	constructor (topLeftXPos, topLeftYPos, width, lenght){
		this.topLeftXPos = topLeftXPos;
		this.topLeftYPos = topLeftYPos;
		this.width = width;
		this.lenght = lenght;
	};

 // collision détectée !
 // on se compare dans la mm classe
	collides(otherRectangle){
		if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
			this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
			this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.lenght &&
			this.lenght + this.topLeftYPos > otherRectangle.topLeftYPos) {

			return true;
		}
		else{
			return false;
		}
   }

    randomize () {
	 // fais qqch pour toutes les propriétés de mon rectangle 
	   // je prends chaque éléments un a un et je leur assigne une position ran compris entre 0 et 1000 
	   // et une taille comprise entre 0 et 20
		this.topLeftXPos = rand(1000);
		this.topLeftYPos = rand(1000);
		this.width = rand(800);
		this.lenght = rand (800);
	}
}
// générer n rectangles avec des positions au hasard 
function rand(n){
	return Math.floor(Math.random() * n ) ;
}

// instanciation  : je teste la méthode  -> new Rectangle ()
// je crée un nouvel objet de type rectangle 
// je génére (for) 1000 rectangles
let a =[];

for( let i =0 ; i< 3; i++){

	let rectangle = new Rectangle()
	
	rectangle.randomize() // pcq la fonction est dans la classe 
	a.push(rectangle);
}
//appel de la methode 
// les rectangles se tapent eux-même -> non 
// il faut qu'ils ne se tapent pas les uns les autres


for (let i =0 ; i < a.length; i++){

	for (let j = i+1 ; j< a.length; j++) {

		if (a[i] !== a[j]) {
				console.log(a[i].collides(a[j]))
		}
	}
	
}




