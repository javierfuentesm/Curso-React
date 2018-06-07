
function platzom(str){

	let translation=str
	//si la palabra termina en ar se le quitan esos dos caracteres

	if (str.toLowerCase().endsWith("ar")) {

		translation=str.toLowerCase().slice(0,-2)

	}


	//si la plabra inicia con Z , se le añade pe al final
		if (str.toUpperCase().startsWith("Z")) {

			translation= translation+"pe"
	}

	//si la plabra traducida tiene 10 a mas letras se debe partiir a la mitad y unir con un guion medio
		if (translation.length=10) {

			const firsthalf= translation.slice(0,Math.round(length/2))
			const secondhalf= translation.slice(Math.round(length/2))//sino se manda segundo parametro es hasta el final

			translation=firsthalf+"-"+secondhalf

		}


	return translation;
}

console.log(platzom("pROGRAMAR")) //Program
console.log(platzom("zorro"))//Zorrope
console.log(platzom("zarpar"))//zarppe
console.log(platzom("abecedario"))//abece-dario




