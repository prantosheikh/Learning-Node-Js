const fs = require("fs");
const { dirname } = require("path");

console.log("I am number one");

const output = fs.readFileSync(__dirname + "/hello.txt", "utf-8");

console.log(output);

const text = "Hello World";


console.log("I Am Number Two");
