const http = require("node:http");

const server = http.createServer((req, res) => {
	console.log(req.url);

	if (req.url === "/home" && req.method === "GET") {
		res.end("This is home Data.");
	} else if (req.url === "/posts" && req.method === "GET") {
		res.end("This is Post Data");
	} else {
		res.end("No Found.");
	}
	res.end("Hello From Server World");
});

server.listen(5000, "127.0.0.1", () => {
	console.log("Server is listening on port 5000");
});
