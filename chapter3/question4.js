const fs = require("fs");
let input = fs.readFileSync("/codeFile/input.txt").toString().split("\n");

let total = parseInt(input[0]);
let cnt = parseInt(input[1]);
let sum = 0;

for (let i = 2; i <= cnt + 1; ++i) {
  let newArr = input[i].split(" ").map((item) => Number(item));
  sum += newArr[0] * newArr[1];
}

if (total === sum) {
  console.log("Yes");
} else {
  console.log("No");
}
