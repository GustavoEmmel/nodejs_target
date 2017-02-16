var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World');
});

app.post('/', function (req, res) {
	res.send('Hello World Post');
});

app.listen(3000, function() {
	console.log('sample app on port 3000');
})