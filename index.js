var express = require("express");
var app = express();
var url = require("url");
const chalk = require("chalk");
var upperCase = require('upper-case');

app.get("/", function(request, response){
	response.sendFile(__dirname + "/main.html");
});

app.get("/search", function(request, response){
	response.sendFile(__dirname + "/search.html");
});

app.get("/result", function(request, response){
	response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
	var query = url.parse(request.url, true).query;
	response.write("Þú leitaðir af: " + upperCase(query.q));
});

app.listen(8080, function(){
	console.log(chalk.yellow("Example app listening on port 8080!"));
});