const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

let [N, M] = input.shift().split(" ").map(Number); //숫자 처리 해주기
const sortedArray = input[0]
  .split(" ")
  .map(Number) //숫자 처리 해주고 오름차순 정렬해주기
  .sort((a, b) => a - b);

function solution(sortedArray, target) {
  let start = 0;
  let end = sortedArray[sortedArray.length - 1];
  let answer = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let x of sortedArray) {
      if (mid < x) sum += x - mid;
    }
    if (sum >= target) {
      if (mid > answer) answer = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(solution(sortedArray, M));
