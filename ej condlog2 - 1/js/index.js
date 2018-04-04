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