const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

let [n1, n2] = input;

console.log(n1 * n2);
