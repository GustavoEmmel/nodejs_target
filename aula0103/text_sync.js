var fs = require('fs');
for (var i = 1; i <= 1000; i++){
	var file = "sync-txt" + i + ".txt";
	var out = fs.writeFileSync(file, "Hello Node JS");
	console.log(out);
}