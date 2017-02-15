var http = require('http');
var url = require('url');

var requestListener = function(req, res){
	res.writeHead(200, {"Content-Type" : "text/html"});
	console.log("Request", req.url);

	var result = url.parse(req.url, true);

	var valor1 = result.query['valor1'];
	var valor2 = result.query['valor2'];

	var route = req.url;
	var route = route.split('?');
	var calc = null;

	if(req.url == "/"){
		res.write("<h1>Calculadora</h1>");	
	} else if(route[0] == "/soma"){
		calc = true;
		var total = parseFloat(valor1) + parseFloat(valor2);	
	} else if (route[0] == '/subtrai') {
		calc = true;
		var total = parseFloat(valor1) - parseFloat(valor2);	
	} else if (route[0] == '/multiplica') {
		calc = true;
		var total = parseFloat(valor1) * parseFloat(valor2);	
	} else if (route[0] == '/divide') {
		calc = true;
		var total = parseFloat(valor1) / parseFloat(valor2);	
	} else if(route[0] == '/testapar') {
		if(result.query['numero'] % 2 == 0){
			res.write("<h1>Eh par</h1>");		
		} else {
			res.write("<h1>Eh impar</h1>");		
		}
	} 

	else {
		res.write("<h1>Pagina não encontrada</h1>");	
	}
	
console.log(route[0]);

	if (calc) {
		res.write("<h1>Valor 1: "+valor1+"</h1>");	
		res.write("<h1>Valor 2: "+valor2+"</h1>");
		res.write("<h1>Total: "+total+"</h1>");
	}
	
	res.end();
}
var server = http.createServer(requestListener);
var serverOn = function(){
	console.log('server hello world rolando!');
}
server.listen(3000, serverOn);