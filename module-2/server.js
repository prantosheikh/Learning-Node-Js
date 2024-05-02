const http = require("node:http");

const server = http.createServer((req, res) => {
	res.end("Hello From Server World");
});

server.listen(5000, "127.0.0.1", () => {
	console.log("Server is listening on port 5000");
});
