const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

let n1 = +input[0];
let sumResult = +input[1].split("")[0];

for (let i = 1; i < n1; i++) {
  sumResult = sumResult + parseInt(input[1].split("")[i]);
}

console.log(sumResult);
