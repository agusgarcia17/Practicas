var num = [3,5,4,1,6,7,2]

function burbujeo (){

    for (let i = 0; i < num.length; i++) {
        
        for (let j = 0; j < num.length-i; j++) {
            
            if (num[j] > num [j+1]){
                var uno = num[j];
                var dos = num[j+1];
    
                num[j] = dos;
                num[j+1] = uno;
         
            }
        }
    }  return num
}

console.log(burbujeo())