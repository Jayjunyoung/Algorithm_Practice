const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const t = Number(input.shift());
const testCase = input.map(Number);

//0~3 인덱스에 값을 미리 설정
const occation = [0, 1, 2, 4];

for (let i = 4; i <= Math.max(...input); i++) {
  occation[i] = occation[i - 3] + occation[i - 2] + occation[i - 1];
}

testCase.forEach((value) => {
  console.log(occation[value]);
});
