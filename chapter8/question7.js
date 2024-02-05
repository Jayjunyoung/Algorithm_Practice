let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num));

let [n1, n2, n3] = input;

console.log(Math.ceil((n3 - n2) / (n1 - n2)));
