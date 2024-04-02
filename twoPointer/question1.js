let input = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .toString()
  .split("\n");

const n1 = +input.shift();
const target = +input.pop();
//input의 마지막 요소 뽑기

const nums = input[0]
  .split(" ")
  .map((v, i) => +v)
  .sort((a, b) => a - b);
//숫자처리해주고 오름차순 정렬
const kill = nums.length;

let start = 0;
let end = kill - 1;
//end: 마지막 인덱스
let answer = 0;

while (start != end) {
  if (nums[start] + nums[end] == target) {
    answer++;
    start++;
  } else if (nums[start] + nums[end] > target) {
    end--;
  } else {
    start++;
  }
}

console.log(answer);
