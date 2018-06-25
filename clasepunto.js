// La primera forma de hacerlo
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


//una segunda forma de hacerelo

const Punto={
	init:function(x,y){
		this.x=x
		this.y=y
	},
	moverenX:function moverenX(x){
		this.x+=x
	},
	moverenY:function moverenY(y){
		this.y+=y
	},
	distancia:function distancia(p){
		const x= this.x - p.x
		const y=this.y - p.y
		return Math.sqrt(x*x + y*y)

	}
}


//const p1= new Punto(0,4)
//const p3= new Punto(3,0)
const p1=Object.create(Punto)
p1.init(0,4)
const p2 = Object.create(Punto)
p2.init(3,0)


console.log(p1.distancia(p2))
p1.moverenX(10)
console.log(p2.distancia(p1))
p2.moverenY(-4)
console.log(p1.distancia(p2))