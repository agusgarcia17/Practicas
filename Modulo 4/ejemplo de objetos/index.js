class Perro {

  constructor ( x = "", y = "" ) {
    this._nombre = x;
    this._raza = y;
  }

  //Debe definirse el constructor con la palabra constructor 
  //o utilizando el mismo nombre de la clase

  /* Perro ( x = "", y = "" ) {
    this._nombre = x;
    this._raza = y;
  }

  */

  //setters y getters 

  set nombre ( value ) {
    this._nombre = value;
  }

  set raza(value){
      this._raza = value; 
  }

  toString () {
    return this._nombre + ', ' + this._raza;
  }
}

// Creacion de objetos
let p1 = new Perro("Fido","Bull terrier");
let p2 = new Perro();


let salida = p1.toString()
//p2.toString(); 

console.log(salida);