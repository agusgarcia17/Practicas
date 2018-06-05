class Materia {
    constructor (nombre, horarios){
        this._nombre = nombre;
        this._horarios = horarios;
        this._notas = [];
    }

    set nombre(value){
        this._nombre = this.nombre
    } 

    get nombre(){
        return this._nombre;
    }

    addNota(nota){
        this._notas.push(nota);
    }

    calcularPromedio (){
        let largo = this._notas.length;
        let total = 0;

        for(var i=0;i<largo;i++){
            total += this._notas[i];
        }
        let promedio = total/largo;
        return promedio;
    }


}