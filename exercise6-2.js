/*
Create a class name Rectangle with attributes topLeftXPos, 
topLeftYPos, width and lenght. Add a method named 
collides(otherRectangle) that returns 
true only if the current rectangle collides with otherRectangle.

Test the collides(otherRectangle) method by using multiple test cases.

*/

class Rectangle {
	constructor (topLeftXPos, topLeftYPos, width, lenght){
		this.topLeftXPos = topLeftXPos;
		this.topLeftYPos = topLeftYPos;
		this.width = width;
		this.lenght = lenght;
	};


 // collision détectée !
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
}



// tester la méthode - instanciation
let rectangle1 = new Rectangle (100,200,16,13);
let rectangle2 = new Rectangle(1,10,16,13);



// appel de la methode
console.log(rectangle1.collides(rectangle2));
