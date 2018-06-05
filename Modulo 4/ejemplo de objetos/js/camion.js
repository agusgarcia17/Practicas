class Camion {
    /**
     * Constructor
     * 
     **/

    constructor (patente="", ejes=""){
        this._patente= patente;
        this._ejes = ejes;
        this._velocidad;
    }
//setters y getters

    set patente (value){
        this._patente = value;
    }

    
    get patente(){
        return this._patente;
    }
    
    set ejes (value){
        this._ejes = value;
    }
    get ejes(){
        return this._ejes;
    }

    get velocidad(){
        return this._velocidad;
    }

    acelerar(aceleracion){
        this._velocidad+=aceleracion;
    }

    frenar(){
        this._velocidad = 0;
    }
    
}
    /*
//metodo para recuperar la patente

    getPatente(){
        return this._patente; 
    }
    getEjes(){
        return this._ejes; 
    }
}

// Creacion de Camion

let camion1 = new Camion ();
let camion2 = new Camion();

console.log(camion1.toString);
*/