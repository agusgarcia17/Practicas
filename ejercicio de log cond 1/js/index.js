/*var dia=9;

switch (dia) {
    case 1: {
            console.log('El dia es lunes')
    }
        break;
    case 2: {
            console.log('El dia es martes')
        }
            break;
    case 3: {
            console.log('El dia es miercoles')
            }
                break;
    case 4: {
            console.log('El dia es jueves')
                }
                    break;
    case 5: {
            console.log('El dia es viernes')
                    }
                    break;
    case 6: {
            console.log('El dia es sabado')
                        }
                    break;
    case 7: {
            console.log('El dia es domingo')
                            }
                    break;
                                                                                                            
    default: { console.log ('El dia es osvaldo')}
        break;
}

//otro ejemplo  NO DA BIEN


var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
var dia = 3;

if (semana.indexOf(dia)==-1){
    console.log('el dia no existe')
}else { 
    console.log('el dia es ' + semana[semana.indexOf(dia)])
}


// otro ejercicio

var nombres = ['pepe', 'pirulo', 'lalo', 'euclides'];
var x = 'lalo';

for (i = 0; i <nombres.length; i++) {
    if (nombres[i]==x) {
        console.log (nombres[i]);
    }     
}


var esta = false; 

while (esta==false && i<nombres.length) {
    if (nombres[i]==x){
        esta = true;
    }
    i++;
}
if (esta) {
    console.log('esta')
}
*/
// 

var nombre = ['pepe', 'pirulo', 'lalo', 'euclides'];
var x = 'lalo';
var esta = nombre.indexOf(x)


if (esta!=-1){console.log('esta')}
