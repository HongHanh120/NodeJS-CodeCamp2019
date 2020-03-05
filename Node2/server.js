const http = require('http');
const url = require('url');

const port = process.env.PORT;
const host = process.env.HOST;

var server = http.createServer( function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	if (request.method === "GET" && request.url === '/hello')
		response.write("world");
	else if (request.method === "POST" && request.url === '/hello')
		response.write("world created");
	else if (request.method === "PUT" && request.url === '/hello')
		response.write("world updated");
	else if (request.method === "DELETE" && request.url === '/hello')
		response.write("world deleted");
	else response.write("URL not found!");
	response.end();
});

server.listen(port, host, function(err){
	if(!err)
		console.log('Your post is ${port}, ${host}');
	console.log(err);
});