/*// ejercicio 1 de iteradores con arrays

var N=10;
var numeros= [];

for (i = 0; i < N; i++) {
    numeros[i]=i;
    console.log(numeros[i]);
}*/

// ejercicio 2 de iteradores con arrays
/*
var N=10;
var numeros= [];

for (i = 0; i < N; i++) {
    numeros[i]=i;
    if (i%2 == 0){
    console.log(i + '.0');
    }else {
        console.log(i+'.'+i);
    }
}


//ejercicio 3 y 4 de iteradores con arrays

var x = [10,24,36,7,98,11,14,20]
var mayor = x[0];
var posicion = 0;

for (i = 0; i < x.length; i++) {
    if (x[i]>mayor){
    mayor=x[i];
    posicion=i;
    }
}
console.log('el mayor es ' + mayor);
console.log ('la posicion del mayor es ' + posicion);



// ejercicio 5

var x = [10,24,36,7,98,11,14,20,98,14,10];
var mayor = x[0];
var contador = 0;

for (i = 0; i < x.length; i++) {
    if (x[i]>mayor){
    mayor=x[i];
    contador=0;
    }

    if(x[i]==mayor) {
        contador++
    }
}
  
console.log(mayor + '.' + contador);
*/


//Ejercicio 6

x = ['a','l','f','a'];
y = ['a','l','f','a','j','o','r'];

function compararArrays(x,y) {
    var i, letras;

    if (x.length == y.length) {
        //si son iguales
        for (i=0; i<x.length; i++){
            if (x[i] != y[i]) {
                letras = letrasEnComun(x,y);
                return "No son iguales, tiene:" +letras+' en comun';
            }   
        }
        return 'Son iguales';
    }else {
        if(x.length>y.length){
            letras=letrasEnComun(x,y);
            return 'X es mayor que Y, tiene: ' +letras+ ' en comun';
        } else {
            letras=letrasEnComun(x,y);
            return 'Y es mayor que X, tiene: ' +letras+ ' en comun';
        }
    }

}

function letrasEnComun(x,y){
    var i,j;
    var k = 0;
    var boleano = false;
    var z =[] ;

    for (i=0;i<x.length;i++){

        for(j=0;j<y.length;j++)
        {
            if(x[i]==y[j]){
               boleano = true; 
            }
        }
        if(boleano){
            if(z.indexOf(x[i])==-1){
                z[k]=x[i];
                k++;
            }
            boleano=false;
         }
    }
    return z.length;
}

console.log(compararArrays(x,y) )
