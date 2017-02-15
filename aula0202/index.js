var http 	= require('http');
var fs		= require('fs');

var server = http.createServer(function(request, response) {

		fs.readFile(__dirname + '/index.html', function(err, arquivo) {
			response.write(arquivo);
			response.end();
		});
	
});

server.listen(8001, function(){
	console.log('Executando servidor HTTP');
});