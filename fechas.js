

// 3 de julio de 1994

const nacimiento= new Date(1994,6,3)

const hoy=new Date()


const tiempo= hoy-nacimiento
const tiempoSegundos= tiempo/1000
const tiempoMin=tiempoSegundos/60
const tiempoHoras=tiempoMin/60
const tiempoDias=tiempoHoras/24

const nextBrithday =new Date(hoy.getFullYear(),nacimiento.getMonth(),nacimiento.getDate())
nextBrithday
const dias=[
"Domingo",
"Lunes",
"Martes",
"Miercoles",
"Jueves",
"Viernes",
"Sabado"
]

dias[nextBrithday.getDay()]
nextBrithday.getDate()

//getDay obtiene el numero de dia
//getDate obtiene el dia del mes