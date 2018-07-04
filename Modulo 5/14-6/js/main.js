var array = [1,3,3];

function sonIguales(array){
    var bandera = true;
    for(var i=0; i<array.length; i++){
        if(array[1]!==array[1]){
            bandera=false;
        }
    }
    return bandera;
}

function elMayor(array){
    var numeroMayor = array[0]; 
    var pos;
    for (let i = 0; i < array.length; i++) {
        if(array[i]>numeroMayor){
            numeroMayor = array[i];
            pos=i;
        }
    }
    return pos;
}

function iterationsToEquality(array){
    var cont=0;
    while(!sonIguales(array)){
        var posMayor =elMayor(array);
    
        for (let i = 0; i < array.length; i++) {
           if(i!==posMayor){
               array[i]++
           }
        }
        cont=cont+1;
    }
    return cont;
}

var contador = iterationsToEquality(array);
console.log(array);
console.log(contador);




