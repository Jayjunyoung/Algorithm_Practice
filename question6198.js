const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const height = input.map(Number);

let stack = [];
let result = 0;

for (let i = 0; i < n; i++) {
  // 현재 건물의 높이보다 낮은 건물들을 스택에서 제거
  while (stack.length > 0 && stack[stack.length - 1] <= height[i]) {
    stack.pop();
  }
  // 현재 스택에 남아 있는 건물들은 모두 현재 건물에서 볼 수 있는 건물들
  result += stack.length;
  // 현재 건물을 스택에 추가
  stack.push(height[i]); //일단 처음에 stack에 10이 푸쉬될것 -> i=1일때로 진입
}

console.log(result);
