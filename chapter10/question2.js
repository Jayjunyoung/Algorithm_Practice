const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num));

const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

const array = [x, w - x, y, h - y];
//최솟값 구하기
const answer = Math.min(...array);
console.log(answer);
