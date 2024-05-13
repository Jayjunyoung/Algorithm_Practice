let input = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .toString()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const sortedArray = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
//N: 나무의 갯수 M: 가져가야하는 높이

function solve(sortedArray, target) {
  let start = 0; //7이상
  let end = sortedArray[sortedArray.length - 1];
  let answer = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let x of sortedArray) {
      //높이
      if (x > mid) sum += x - mid;
      //x >= mid 안해주는 이유는 0은 차피 안더해줘도 되기 때문
    }

    if (sum >= target) {
      if (mid > answer) answer = mid;
      // 최댓값 계속 구해주기.
      // 이 부분을 제외하고는 일반적인 이분탐색 코드와 똑같다.
      start = mid + 1;
      //start가 11이고 end 20이므로 mid구하면 15가 됌
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(solve(sortedArray, M));
