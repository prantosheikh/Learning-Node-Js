// const { a, b, add } = require("./file-2");
// const { a: a3, b: b3, add: add3 } = require("./file-3");
import { a, b, add } from "./file-es2.mjs";
import { a as a3, b as b3, add as add3 } from "./file-es3.mjs";

console.log(a3, b3, add3(1, 3, 9));
