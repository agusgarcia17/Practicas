//ejercicio 1

var x = 15000;
var puntos = 11500; 
var premium = false;

if (x<puntos){
    console.log("el cliente canjea sus puntos sin agregar dinero");
} else if (puntos >= (x/2) && puntos<x && premium==true){
    var dinero = (x-puntos)/5;
    console.log('el cliente es premium y debera agregar $' + dinero);
} else if (puntos>=(x/2) && puntos<x && premium==false){
    var dinero = (x-puntos)/3;
    console.log('el cliente debera agregar $' + dinero);
} else {
    console.log('el cliente no tiene puntos suficientes para comprar el producto');
}


// ejercicio 2

var distancia = 0;
var transporte = true;
var costo = 1400; 

if (distancia < 10 && costo < 1500) {
    console.log ('La colonia queda a menos de 10km y se contrata transporte')
}

//ejercicio 3

var tarjeta = 'Amex';

switch (tarjeta) {
    case 'Visa':
        console.log ('Hasta 9 cuotas sin interes');
        break;
    case 'Mastercard': 
        console.log ('Hasta 6 cuotas sin interes');
        break;
    case 'Amex':
        console.log ('Hasta 3 cuotas sin interes');
        break;
    default:
        console.log('Hasta una cuota sin interes');
        break;
}