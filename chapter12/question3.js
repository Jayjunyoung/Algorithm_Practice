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

//노트에 적어놓은 풀이 보기(hint: 각 식에 곱해주기)
const x = (c * e - b * f) / (a * e - d * b);
const y = (c * d - a * f) / (b * d - a * e);

if (x === -0 || y === -0) {
  //js는 -0도 나오기 때문에 0으로 바꿔주기 위한 문자열 처리 필요!
  console.log(x + " " + y);
} else {
  console.log(x, y);
}
