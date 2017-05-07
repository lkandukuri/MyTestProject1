var express = require('express');
var app = express();
app.use(express.static('html'));

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server is started");
	console.log("host : "+host);
	console.log("port : "+port);
});

