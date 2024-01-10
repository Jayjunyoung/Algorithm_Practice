const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n");

const a = parseInt(inputData[0].split(" ")[0]);
//배열 inputData에서 첫 번째 요소를 선택하고, 그 값을 공백(" ")을 기준으로
//나눈 후 첫 번째 요소를 정수로 변환하여 변수 a에 저장..
const b = parseInt(inputData[0].split(" ")[1]);
const c = parseInt(inputData[1]);

let h = Math.floor((a * 60 + b + c) / 60);
let m = (a * 60 + b + c) % 60;
if (h >= 24) {
  h -= 24;
}

console.log(h, m);
