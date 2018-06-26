function suma(...numeros) {

/* Manera tradicional de hacerlo
let acum=0
	for (let i = 0; i < numeros.length; i++) {
		acum += numeros[i]
	}

	return acum
*/
// El metodo reduce  por cada elemento del array va ir
// acumulando un array sobre un acumulador
//y ese acumulador s elo pasa al sigueinte elemento
//Reduce recibe una funcion

	return numeros.reduce(function(acum,numero){
		acum += numero
		return acum
	},0)

}

function dobles(...numeros){
	const resultado=[]
	for (var i = 0; i < numeros.length; i++) {
		resultado.push(numeros[i]*2)//es necesario el push para insertar elementos en un arreglo 
		//resultado[i]=numeros[i]*2 esta es la manera clasica
	}
	return resultado

}

function dobles2(...numeros){
	//map recibe una funcion que se va a ejecutar por cada uno de los elementos del array
	return numeros.map(function(numero){
		return numero*2
	})
	// Con arrow function las llaves no son necesarias porque solo es una linea de codigo y el return no es necesario tampoco
	//return numeros.map(numero=> numero*2)
}
//una arrow function de dobles
const dobles3=(...numeros)=>numeros.map(numero=>numero*2)


function pares(...numeros){

	const resultado=[]
	const lenght=numeros.lenght
	for (let i = 0; i < lenght; i++) {
		const numero=numeros[i]
		if (numero % 2 == 0) {
		 resultado.push(numero)
		 
		}
	}
	return resultado
	
}
 //Usando filter se supone que regresa un true o false
function pares2(...numeros){
	return numeros.filter(function(numero){
		return numero % 2==0
	})
}

//pares con arrow function

const pares3=(...numeros)=>numeros.filter(numero=>numero%2==0)
pares3(4,8,12,8954,7)


pares2(4,8,12,8954,7)


pares(4,8,12,8954,7)


dobles3(4,8,12,8954,7)


dobles2(4,8,12,8954,7)

dobles(4,8,12,8954,7)

suma(4,8,12,8954,7)