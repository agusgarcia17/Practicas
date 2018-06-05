// paquetes necesarios para el proyecto
var http = require('http');

var miControlador = requiere('./controladores/funciones');

//cargo mi propio modulo
var modulo = require('./modulo');

//seteamos el puerto en el cual va a escuchar los pedidos de la aplicacion
var puerto = '8080';

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(miControlador.random());
    //Creo el servidor.
    res.end();

}).listen(puerto, function(){
    console.log("Escuchando en el puerto" + puerto); 
});