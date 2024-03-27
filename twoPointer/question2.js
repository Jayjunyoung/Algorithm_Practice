let input = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .toString()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const nums = input[0].split(" ").map(Number);
let answer = 0;
let left = 0;
let right = 0;
let sum = nums[left];

while (left < N && right < N) {
  if (sum === M) {
    answer++;
    sum += nums[++right];
  } else if (sum < M) {
    sum += nums[++right];
  } else {
    sum -= nums[left++];
  }
}

console.log(answer);
