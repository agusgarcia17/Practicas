const rutaImg = "img";
var cumplesStorage = localStorage.getItem('cumples');
let jSon = JSON.parse(cumplesStorage);
var cumples = jSon.cumples;

/**
 * Recupero cumples guardados
 **/


function proximosCumples(){
    $.each(cumples, function(index, elem){

        let li = `<li><p><span>${elem.fechaNac}</span>
                ${elem.nombre}</p>
                <a  class="borrar" data-id="$(index)">x</a>
                </li>`

                $('#cumples').append(li);
    })
}

function cumpleDelDia(){

let indice = Math.floor(Math.random() * cumples.length);

while(indice == cumples.length){
    indice = Math.floor(Math.random() * (cumples.length));
}

let cumpleHoyImg = cumples[indice].imagen;
let cumpleHoyName = cumples[indice].nombre;

let h1 =`<h1>${cumpleHoyName}</h1>`;
let img = `<img id="imgHome" src="img/${cumpleHoyImg}.png">`;


$('#cumple-dia').append(h1);
$('#cumple-dia').append(img);

}

$('.borrar').on('click', e=> {

    e.preventDefault();
    let li = $(this);
    li.parent().remove();
    let indice = li.data('id');
    cumples.splice(indice,1);
    jSon.cumples=cumples;
    jSon.total = cumples.length;
    let datos = JSON.stringify(Sson);
    localStorage.setItem("cumples", datos);

});


proximosCumples();
cumpleDelDia();



