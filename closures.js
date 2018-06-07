*/
function saludarGomez(nombre){

	console.log("Hola"+nombre+"Gomez")
}

function saludarFuentes(nombre){

	console.log("Hola"+nombre+"Fuentes")
}
/*
function saludarFamilia(apellido){

	return function saludarmiembrodefamilia(nombre){
		console.log("Hola "+ nombre +apellido)
	}
}

const saludarGomez=saludarFamilia("Gomez")
const saludarFuentes=saludarFamilia("Fuentes")
//Alamcena en memoria el nombre en vez de llamar a uan funcion llama a const que esta a su vez llama a la funcion y
//esta retorna una funcion que usa el nombre 

saludarFuentes("Javier")
saludarFuentes("Vannya")
saludarFuentes("Roberto")
saludarFuentes("Blanca")
saludarGomez("juan")
saludarGomez("pedro")
saludarGomez("simon")
saludarGomez("judas")

//Closures: Son funciones que recuerdan el scope - entorno en donde fueron creadas. Lo cual permite que los 
//closures o funciones internas tengan acceso a las variables de la función externa, dado que estan en el mismo scope. Ejemplo:

functioncreaSumador(x) {
  returnfunction(y) {
    return x + y;
  };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2));  // muestra 7
console.log(suma10(2)); // muestra 12
//La función anónima interna, crea una única variable y, que es recibida como parámetro. 
//Sin embargo dado que es un closure y esta en el scope de la funcion creaSumador, tiene acceso a
// x lo cual le permite devolvernos la suma de x + y




function makePrefixer(prefijo){

	return function agregador(palabra){
		console.log(prefijo+palabra)
	}
}


const prefijore=makePrefixer("Re")


prefijore("malo")
 


