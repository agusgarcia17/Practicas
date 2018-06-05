var puerto = 8080;
var http = require('http');

//agrego el modulo fileServer
var fs = require('fs');

http.createServer(function (req, res){
    
    //res.writeHead(200, 'Content-Type');
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('../html/perfil.html', function(err, data){
        //Escribo el contenido del archivo en la respuesta
        res.write(data);
        res.end();
    })

}).listen(puerto, function(){
    console.log("Escuchando en el puerto 8080");
});
