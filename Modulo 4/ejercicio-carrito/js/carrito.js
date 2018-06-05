//const rutaImg = "img";
var carritoStorage = localStorage.getItem('listaCompras');
let jSon = JSON.parse(carritoStorage);
var compras = jSon.compras;

function productList(){
    $.each(compras, function(index, elem){

        let li = `<li><p><span>${elem.fechaNac}</span>
                ${elem.nombre}</p>
                <a  class="borrar" data-id="$(index)">x</a>
                </li>`

                $('#cumples').append(li);
    })
}