//ejercicio 1

var x=0;

if (x%2==0 && x!=0){console.log ('es par');
}else {console.log ('no es par');}

// ejercicio 2

var dia = 8;

switch (dia) {
    case 1: console.log('el dia es lunes');
        
        break;
    case 2: console.log('el dia es martes');
        
        break;
    case 3: console.log('el dia es miercoles');
        
        break;
    case 4: console.log('el dia es jueves');
        
        break;
    case 5: console.log('el dia es viernes');
        break;
    case 6: console.log('el dia es sabado');
        break;

    case 7: console.log('el dia es domingo');
        break;
    default: console.log ('el dia es osvaldo');
        break;
}

// ejercicio 3
var mes = 'Febrero';

switch (mes) {
    case 'Enero':
        console.log ('el mes ' + mes + ' tiene 31 dias');
        
        break;
    case 'Febrero':
        console.log ('el mes ' + mes + ' tiene 28 dias');
            
        break;
    
    case 'Marzo':
        console.log ('el mes ' + mes + ' tiene 3! dias');
                
        break;
    
    case 'Abril': 
        console.log ('el mes ' + mes + ' tiene 30 dias ');
        break;

    case 'Mayo':
        console.log ('el mes ' + mes + ' tiene 31 dias');
            
        break;

    case 'Junio':
        console.log ('el mes ' + mes + ' tiene 30 dias');
            
        break;

    case 'Julio':
        console.log ('el mes ' + mes + ' tiene 31 dias');
            
        break;
    case 'Agosto':
        console.log ('el mes ' + mes + ' tiene 31 dias');
                
        break;
        
    case 'Septiembre':
        console.log ('el mes ' + mes + ' tiene 30 dias');
                    
        break;
        
    case 'Octubre':
        console.log ('el mes ' + mes + ' tiene 31 dias');
                
        break;
    
    case 'Noviembre':
        console.log ('el mes ' + mes + ' tiene 30 dias');
                
        break;
    case 'Diciembre':
        console.log ('el mes ' + mes + ' tiene 31 dias');
                
        break;
    default:
        console.log('no es un mes');
        break;
}

// Ejercicio 4

var x = 3;
var y = 4;
var z = 5;

if (x>=0) {
    console.log (x + ' es positivo')
} else { console.log ( x + ' es negativo')}

if (y>=0) {
    console.log (y + ' es positivo')
} else { console.log ( y + ' es negativo')}

if (z>=0) {
    console.log (z + ' es positivo')
} else { console.log ( z + ' es negativo')}

// ejercicio 5

var letra = 'r';

switch (letra) {
    case 'a':
        console.log ('es la vocal a');
        break;

    case 'e':
        console.log ('es la vocal e');
        break;

    case 'i':
        console.log ('es la vocal i');
        break;

    case 'o':
        console.log ('es la vocal o');
        break;

    case 'u':
        console.log ('es la vocal u');
        break;

    default:
        console.log ('no es vocal');
        break;
}

// ejercicio 6

var x=10;
var y=3;
var z=4;
var r = x-z;


if (x>y){
    r;
    console.log('r es la resta: ' + r);
    if(r>y){
        console.log('r es mayor que y')}
        else {console.log('r es menor que y, entonces el resultado es ' + (x+z)*y);}
    }

// ejercicio 7

var sueldoAnual = 40000;
var antiguedad = 1; 

if (antiguedad >= 10) {
    sueldoAjustado = (sueldoAnual+sueldoAnual*0.1);
    console.log('El sueldo que le correponde es ' + sueldoAjustado);
}

if (antiguedad < 10 && antiguedad >= 5) {
    sueldoAjustado = (sueldoAnual+sueldoAnual*0.07);
    console.log('El sueldo que le correponde es ' + sueldoAjustado);
}

if (antiguedad < 5 && antiguedad >= 3) {
    sueldoAjustado = (sueldoAnual+sueldoAnual*0.05);
    console.log('El sueldo que le correponde es ' + sueldoAjustado);
}

if (antiguedad < 3) {
    sueldoAjustado = (sueldoAnual+sueldoAnual*0.03);
    console.log('El sueldo que le correponde es ' + sueldoAjustado);
}