var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
	res.end("Hello World");
});
server.listen(8080);
console.log("Web server running on port 8080");
