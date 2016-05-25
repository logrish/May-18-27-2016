var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){
	var url = request.url;
	if(url.match(/world/)){
		getWorldInfo(request,response);
	}
	else if(url == "/"){
		response.end("index.html not found");
	}
	else{
		var fileName = url.substring(1);
		if(fileName.indexOf("?") != -1)
			fileName = fileName.substring(0,fileName.indexOf("?"));
		sendFile(fileName,response);
	}
});
function getWorldInfo(request,response){
	var queryString = require("url").parse(request.url,true).query;
	var country = queryString.country;
	var output = {"capital":"Not Available in DB","continent":"Not Available in DB"};
	if(country == "India")
		output = {"capital":"New Delhi","continent":"Asia"};
	else if(country == "USA")
		output = {"capital":"Washington DC","continent":"North America"};
	else if(country == "UK")
		output = {"capital":"London","continent":"Europe"};
	response.end(JSON.stringify(output));
}
function sendFile(fileName,response){
	fs.readFile(fileName,function(err,data){
		if(err)
 			response.end("File " + fileName + " not found");
		else
			response.end(data);
	});
}
server.listen(8080);
console.log("Server is running and waiting for requests");
