class Auto {
    /**
     * Constructor
     * 
     **/

    constructor (patente=""){
        this._patente= patente;
    }
//setters y getters

    set patente (value){
        this._patente = value;
    }

    get patente(){
        return this._patente;
    }
    
//metodo para recuperar la patente

    getPatente(){
        return this._patente; 
    }
}

// Creacion de Auto

let auto1 = new Auto ();
let auto2 = new Auto();

console.log(auto1.toString);