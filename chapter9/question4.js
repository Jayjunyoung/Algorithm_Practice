const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift()); //4 추출
const array = input.shift().split(" ").slice(0, N).map(Number);

const answer = array.filter((number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}).length;

console.log(answer);
