const http = require ('http')

http.createServer(function(peticion,respuesta){

    respuesta.write('hola usuario');
}).listen(1010);

console.log('el servidor esta corriendo en el puerto 1010')