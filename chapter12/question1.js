const input = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const N = +input[0].shift();
const M = +input.shift();
let sum = 0;
let maxSum = 0;

//첫 번째 카드
for (let i = 0; i < N - 2; i++) {
  //두 번째 카드
  for (let j = i + 1; j < N - 1; j++) {
    //세 번째 카드
    for (let k = j + 1; k < N; k++) {
      //선택된 카드 3장의 합을 sum에 저장
      sum = input[0][i] + input[0][j] + input[0][k];
      //sum이 기존의 maxSum값보다 크고 M보다 작은지 확인
      if (sum <= M && sum > maxSum) {
        //해당되면 maxSum값을 sum값으로 변경
        maxSum = sum;
      }
    }
  } //전 1,3,4번이 가장 어려웠네요
}
//for문 모두 끝난 뒤 maxSum 출력
console.log(maxSum);
