//El método bind devuelve otra función que asigna el this a lo 
//que nosotros le pasamos como parametro



class Toggable{
    constructor(element){
        this.element=element;
        this.element.innerHTML = 'Off';
        this.activated = false;
        this.element.addEventListener("click",this.onClick.bind(this));
        //Se usa el bind porque sino el adevent listener
        //es como una fucnion y dentro de esa funcion se esta
        //llamando a otra entonces el scope toma el this del entonrno del

    }
    onClick(){
        console.log(this);
        
        this.activated = !this.activated;
        this.toggleText();

    }

    toggleText(){
        this.element.innerHTML= this.activated ? "On" : "Off"

    }

}

const button= document.getElementById('boton');
const miBoton= new Toggable(button);