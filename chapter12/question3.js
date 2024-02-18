let input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));

const a = input[0];
const b = input[1];
const c = input[2];
const d = input[3];
const e = input[4];
const f = input[5];

const x = (c * e - b * f) / (a * e - d * b);
const y = (c * d - a * f) / (b * d - a * e);

if (x === -0 || y === -0) {
  return;
} else {
  console.log(x, y);
}
