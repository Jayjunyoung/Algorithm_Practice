let [TC, ...input] = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .split("\n");
input = input.map((i) => i.split(" "));
const arr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let i = 0; i < TC; i++) {
  let startX = +input[i][0]; // 3
  let startY = +input[i][1]; // 7
  for (let l = 0; l < 10; l++) {
    for (let m = 0; m < 10; m++) {
      if (arr[startX + l][startY + m] === 1) {
        continue;
      }
      if (arr[startX + l][startY + m] === 0) {
        arr[startX + l][startY + m] = 1;
        count++;
      }
    }
  }
}
console.log(count);
