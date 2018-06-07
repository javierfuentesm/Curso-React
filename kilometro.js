const nombre="Javier"
const dias=[
'lunes',
'martes',
'mierrcoles',
'jueves',
'viernes',
'sabado',
'domingo'
]
function correr() {
const min=5
const max=15
return Math.round(Math.random()* (max-min)) +min

}

let totalkms=0
let promedio=0
for(let i=0; i<dias.length; i++){
let kms=correr()
console.log("El dia "+ i + "es el "+dias[i]+ "y "+nombre +" corrio "+kms+" kilometros")
totalkms=totalkms+kms
}

promedio=totalkms/dias.length

console.log("El promedio de Kilometros recorridos por "+nombre+ " es de " + promedio)