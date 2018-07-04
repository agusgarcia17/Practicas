
function buleano (word){
    var p2 = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase()
    var p3 = p2.split("").reverse().join("");
    return p2===p3
}
console.log(buleano('a mi me mima'))
