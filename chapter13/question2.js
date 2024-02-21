let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let total = 0;
let mid = 0;

for (let i = 0; i < input.length; i++) {
  total += Number(input[i]);
}

const newSort = input.sort((a, b) => a - b);
mid = Math.floor(input.length / 2); //ex. 7의중간값은 3을 의미

//평균이랑 중간값 의미
console.log(total / input.length);
console.log(newSort[mid]);
