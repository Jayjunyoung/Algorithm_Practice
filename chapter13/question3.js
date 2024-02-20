let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const n2 = +input[0].split(" ")[1];

const absArray = input[1]
  .split(" ")
  .map((x) => +x)
  .sort((a, b) => b - a);

console.log(absArray[n2 - 1]);
