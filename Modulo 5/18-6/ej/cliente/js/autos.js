//ip y puerto al que se le realizaran los pedidos
var servidor = 'http://localhost:8080';
$(document).ready(function() {
    //se hace el pedido al backend de todos los generos para cargalos en el listado de géneros
    $.getJSON(servidor + "/marcas",
        function(data) { // function de callback, data es lo que me va a devolver el servidor
            console.log(data);
            for (i = 0; i < data.marcas.length; i++) {
                //se duplica una opcion de la lista de selección
                var opcion = $(".marca-select option[value='-1']").clone();
                //a esa opcion se le asigna como valor el id del genero, dato que luego va a servir para filtrar por id de genero.
                opcion.attr("value", i);
                //se le pone el nombre del genero al texto de la opcion
                opcion.html((data.marcas)[i]);
                //se agrega la opcion a la lista de seleccion
                $(".marca-select").append(opcion);
            }
        });
});


//paramentro dentro del objeto json que es marcas
//data es un objeto, cuyo elemento marcas (arreglo) es lo que necesito desplegar en mi select. For, marcas.length 