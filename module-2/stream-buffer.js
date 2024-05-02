const fs = require("fs");

// fs.readFile(__dirname + "/hello.txt", "utf-8", (err, data) => {
//    if (err) {
//       throw new Error("Error! reding file!");
//    }

//    fs.writeFile("./module-2/write-async.txt", data, (err) => {
//       if (err) {
//          throw new Error("Error");
//       }
//    });
// });

// create a writeable streaming
const writeableStream = fs.createWriteStream(__dirname + "/hello-write.txt");

// create a readable streaming

const readableStream = fs.createReadStream(__dirname + "/hello.txt", "utf-8");

readableStream.on("data", (data) => {
	console.log(data);

	// writeableStream.write(data, (err) => {
	// 	if (err) {
	// 		if (err) {
	// 			throw new Error("Error!");
	// 		}
	// 	}
	// });
	readableStream.pipe(writeableStream);
});

readableStream.on("error", (error) => {
	throw new Error(error);
});

writeableStream.on("error", (err) => {
	throw new Error(err);
});

writeableStream.on("finish", () => {
	console.log("Finished Writeable Stream");
});
