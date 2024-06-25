const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const n1 = Number(input[0]);
//let answer = [666];
let count = 1;
let numberOfEnd = 666;
while (count != n1) {
  numberOfEnd++;
  if (String(numberOfEnd).includes("666")) {
    count++;
  }
}

console.log(numberOfEnd);
