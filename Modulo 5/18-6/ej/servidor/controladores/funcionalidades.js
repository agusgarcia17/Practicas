
function buscarAutos(req, res) {

      let resultado = [{
                         modelo: 'X7',
                         marca: 'BMW',
                         img: 'bmw'
                        },
                        { 
                          modelo: 'X3',
                          marca: 'BMW',
                         img: 'bmw'  
                        }];

        var respuesta = {
              'autos': resultado,
              'total': resultado.length
        };


        res.send(JSON.stringify(respuesta));
}

function buscarMarcas(req, res) {

        resultado = ['BMW',"Audi","Mercedes Benz","Bentley"]; // esto es u arreglo con marcas. 

        var respuesta = {
              'marcas': resultado
        }; // se genera un objeto. Marcas es un atributo que siempre tengo que tener

        res.send(JSON.stringify(respuesta));
    
}

function informacionAuto(req, res) {

    var id = req.params.id;
    var precio = "USD 45000";
    var detalle = "Tracción 4x4";

        var respuesta = {
              'detalle': detalle,
              'precio': precio
        };


    res.send(JSON.stringify(respuesta));
  
}


module.exports = {
    buscarAutos: buscarAutos,
    buscarMarcas: buscarMarcas,
    informacionAuto:informacionAuto
    
};
