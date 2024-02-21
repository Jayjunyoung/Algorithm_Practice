let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const n1 = +input.shift();

let newArray = input.sort((a, b) => a - b).map((num) => Number(num));

console.log(newArray.join("\n"));
