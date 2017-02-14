var http = require('http');
var requestListener = function(req, res){
	res.end('Teste de Webserver\n');
}
var server = http.createServer(requestListener);
server.listen(3000);