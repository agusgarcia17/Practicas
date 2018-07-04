var array = 'ababaa';
var nuevoArray = array;
var vacio =[];

while(nuevoArray.length >1 ){
    nuevoArray = nuevoArray.slice(1)
    vacio.push(nuevoArray)
    console.log(vacio)
}

console.log(vacio[1][0])



for (let i = 0; i < array.length; i++) {
   
}
if (vacio[i][i] == array[i]){
    console.log('igual')
} else {
    console.log('distinto')
}