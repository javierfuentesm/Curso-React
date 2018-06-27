class Persona{
    constructor(nombre,amigos=[]){
        this.nombre=nombre;
        this.amigos=amigos
    }
    listarAmigos(){

        this.amigos.forEach(amigo => { //Cuando es  un arrow function toma  automaticamente el this de afuera
                                        //no necesitamos redefinirlo como _this o self
            console.log("Hola mi nombre es "+this.nombre+"Y soy amigo de "+amigo);
            
        });
    }
}
const desplegar = new Persona("Javier",["Rodolfo","Justin","Ana"]);

//Codigo del curso con todos los pasos
class Persona {
    constructor(nombre, amigos = []) {
      this.nombre = nombre
      this.amigos = amigos
    }
  
    listarAmigos() {
      const _this = this
  
      this.amigos.forEach((amigo) => {
        // console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
        console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
      }/* .bind(this) */)
    }
  }
  
  const sacha = new Persona("Sacha", [ "Pedro", "Juan", "Pepe" ])