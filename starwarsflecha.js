const hola= `star Wars El ultimo jedi`
let pgstartwars=13

const Javier= "Javier"
let agejavier=23

const nameVannya="Vannya"
let ageVannya=12

let canwatchstrwars=(name,age,iswithadult)=> {

	if (age>=pgstartwars) {

		alert(`${name} puede pasar a ver la ${hola}`)

	}
	else if(iswithadult){

		alert(`${name} puede pasar a ver la ${hola}porque esta acompañado de un adulto`)

	}
	else{
				alert(`${name} no puede pasar a ver la ${hola}`)

	}
}

canwatchstrwars(nameVannya,ageVannya,1)
canwatchstrwars(Javier,agejavier)