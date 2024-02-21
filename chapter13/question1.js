let input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

const n1 = input.shift();

input.sort((a, b) => a - b);

//오름차순 정렬 후 반복문 돌리면서 출력
for (let i = 0; i < n1; i++) {
  console.log(input[i]);
}
