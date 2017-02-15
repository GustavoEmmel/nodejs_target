var http 	= require('http');
var fs		= require('fs');
var url		= require('url');

var server = http.createServer(function(request, response) {
	fs.readFile(__dirname + '/estados.json', function(err, arquivo) {
		var headers = {};
		headers["Access-Control-Allow-Origin"] = "*";
		headers["Content-Type"] = "application/json";
		response.writeHead(200, headers);


console.log('aqui');

//var result = url.parse(request.url, true);
console.log(request.url);

// var estado = result.query['uf'];

var obj = JSON.parse(arquivo);

 console.log(obj);

	


		response.write(arquivo);
		response.end();
	});
});



server.listen(8000, function(){
	console.log('Executando servidor HTTP');
});