// creation de la classe Circle
class Circle {
	constructor (xPos, yPos, radius){
		this.xPos = xPos;
		this.yPos = yPos;
		this.radius = radius;
	}

// getteur
	get surface (){
		return this.surface;
	}

// aJout des methodes
	move(xOffset, yOffset){
	this.xPos= xOffset;
	this.yPos= yOffset;
}


	surface(){
		return (this.radius*this.radius)*Math.PI;
	}

}


let circ1 = new Circle(7,2,9);

console.log(circ1.xPos,circ1.yPos,circ1.radius);
console.log(circ1.surface());

circ1.move(7,3);
console.log(circ1.xPos,circ1.yPos,circ1.radius);
