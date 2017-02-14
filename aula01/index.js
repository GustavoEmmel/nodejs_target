var http = require('http');
var url = require('url');

var requestListener = function(req, res){
	res.writeHead(200, {"Content-Type" : "text/html"});
	console.log("Request", req.url);

	var result = url.parse(req.url, true);
	for (var key in result.query){
		res.write("<h2>"+key+" : "+result.query[key]+"</h2>");
	}
	
/*
	if(req.url == "/"){
		res.write("<h1>Hello World</h1>");	
	} else if(req.url == "/bemvindo"){
		res.write("<h1>Bem vindo</h1>");	
	} else {
		res.write("<h1>Pagina não encontrada</h1>");	
	}
*/	
	res.end();
}
var server = http.createServer(requestListener);
var serverOn = function(){
	console.log('server hello world rolando!');
}
server.listen(3000, serverOn);