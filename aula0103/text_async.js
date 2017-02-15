var fs = require('fs');
for (var i = 1; i <= 1000; i++){
	var file = "async-txt" + i + ".txt";
	fs.writeFileSync(file, "Hello Node JS", function(err, out) {
		console.log(out);	
	});
}