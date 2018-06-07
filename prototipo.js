function Punto(x,y){
	this.x=x
	this.y=y

}

Punto.prototype.moverenX = function moverenX(x) {
	this.x+=x
}
Punto.prototype.moverenY= function moverenY(y) {
	this.y+=y
}

Punto.prototype.distancia= function distancia(p) {
	const x= this.x - p.x
	const y=this.y - p.y
	return Math.sqrt(x*x + y*y)

}

const p1= new Punto(0,4)
const p3= new Punto(3,0)


*/
const p1={

	x:0,
	y:4,
	moverenX: function(x){ this.x =this.x +x },
	moverenY: function(y){ this.y =this.y +x }

}

const p2={
	x:3,
	y:0,
	moverenX: function(x){ this.x =this.x +x },
	moverenY: function(y){ this.y =this.y +x }
}

function distancia(p1,p2){

	const x= p1.x -p2.x
	const y= p1.y - p2.y

	return Math.sqrt((x*x + y*y))
}
*/

console.log(p1.distancia(p2))
p1.moverenX(10)
console.log(p1.distancia(p2))
p2.moverenY(-4)
console.log(p1.distancia(p2))