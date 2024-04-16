const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

// 첫 번째 입력 줄에서 상자의 수 가져오기
const n = parseInt(input[0]);
// 두 번째 입력 줄에서 상자의 크기 배열을 가져오기
const boxes = input[1].split(" ").map(Number);

function longestIncreasingSubsequence(boxes) {
  const n = boxes.length;
  const dp = new Array(n).fill(1); // 모든 상자에 대해 최대 길이는 처음에 1로 초기화

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (boxes[j] < boxes[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp); // dp 배열에서 최대값 찾기
}

// 함수를 호출하고 return값 출력
const result = longestIncreasingSubsequence(boxes);
console.log(result);
