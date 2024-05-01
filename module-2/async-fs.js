const fs = require("fs");

console.log("I Am Number One");

fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) => {
	if (err) {
		throw new Error("Error! reding file!");
	}
	console.log(data);
});

console.log("I Am Number Two");
