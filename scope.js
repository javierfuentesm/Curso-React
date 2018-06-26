
/*Escope es el conjunto de variables y funciones que podemos llamar en
 una parte del código

Si definimos una variable en el scope global (window en el navegador) 
podemos acceder a ella dentro de cualquier lugar del código.

Si definimos una variable dentro de una función solo lo podemos utilizar 
dentro de esa función si lo declaramos con var, si lo declaramos con let
 solo podemos acceder a ella en el bloque de código. */

var nombre = "Sacha"

function saludar10() {
  var nombre
  if (true) {
     nombre = "Eric"
  }
  
  console.log(`Hola ${nombre}`)
}

saludar("Sacha")
console.log(`La variable nombre tiene el valor ${nombre}`)



//Forma correcta de hacerlo

function saludarASacha10() {
  const nombre = "Sacha"

  for (let i = 0; i < 10; i++) {
    console.log(`Hola ${nombre}`)
  }
}

saludarASacha10()