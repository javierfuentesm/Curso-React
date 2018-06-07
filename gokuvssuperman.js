let vidaGoku=100
let vidasuperman=100

const MIN_POWER=5
const MAX_POWER=12

let round =1

function ambossiguenvivos(){

	return vidaGoku>0&& vidasuperman>0
}
//const ambossiguenvivos=()=> vidaGoku>0&& vidasuperman>0

const calcularGolpe=()=>Math.round(Math.random()*(MAX_POWER - MIN_POWER)+MIN_POWER)



while(ambossiguenvivos()){



console.log(`Round ${round}`)

const golpeGoku= calcularGolpe()
const golpeSuperman= calcularGolpe()

if (golpeGoku>golpeSuperman) {
	console.log('Goku ataca a superman con un golpe de '+golpeGoku)
	vidasuperman-=golpeGoku
	console.log('La vida de superman queda de '+vidasuperman)


	//ataca goku
}
else{
		console.log('Superman ataca a goku con un golpe de '+golpeSuperman)
		vidaGoku-=golpeSuperman
		console.log('La vida de Goku queda de '+vidaGoku)

	//ataca superman
}
round++

}

const gokuSigueVivo =()=> vidaGoku>=1

if (gokuSigueVivo()) {

	console.log("Goku gano la pelea. Su vida es de "+ vidaGoku)
}
else{
		console.log("Superman gano la pelea. Su vida es de "+ vidasuperman)


}