const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

let N = input.shift();
const answer = [];

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    N /= i;
    answer.push(i);
  }
  if (N === 1) break;
}

answer.forEach((number) => console.log(number));
