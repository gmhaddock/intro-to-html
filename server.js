var express = require("express");
var server 	= express();


server.use(express.static(__dirname+""));


server.listen(8080, function(){
	console.log("Server now listening on port 8080");
});