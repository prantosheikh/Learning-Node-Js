const fs = require("fs");
const { dirname } = require("path");

const output = fs.readFileSync(__dirname + "/hello.txt", "utf-8");

console.log(output);

const text = "Hello World";

fs.writeFileSync("./module-2/write.txt", text);
