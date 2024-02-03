const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ");

let s1 = input[0];
let n1 = +input[1];

let result = parseInt(s1, n1);
console.log(result);
