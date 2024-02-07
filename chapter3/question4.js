const fs = require("fs");
let input = fs.readFileSync("/codeFile/input.txt").toString().split("\n");

let total = parseInt(input[0]);
let cnt = parseInt(input[1]);
let sum = 0;

for (let i = 2; i <= cnt + 1; ++i) {
  //인덱스는 2부터 5까지 범위 설정 후 갯수랑 가격 곱한거 구해주기
  //ex. 2000 * 5 처럼 각각 곱한거 쭉 더하기
  let newArr = input[i].split(" ").map((item) => Number(item));
  sum += newArr[0] * newArr[1];
}

if (total === sum) {
  console.log("Yes");
} else {
  console.log("No");
}
