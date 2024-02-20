let input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

const n1 = input.shift();

input.sort((a, b) => a - b);

for (let i = 0; i < n1; i++) {
  console.log(input[i]);
}
