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
  //배열 범위 벗어나지 않게 한다.
  if (sum === M) {
    answer++; //부분합 같으면 answer 증가
    sum += nums[++right]; //right를 이동
  } else if (sum < M) {
    sum += nums[++right]; //right를 이동
  } else {
    sum -= nums[left++];
    //0일때 1
    //1일때 2
    // sum - nums[0]
    //left 인덱스가 한칸 이동하고 이동하기전 인덱스요소 값을 마이너스 해주기
  }
}

//배열 인덱스를 넘어가면 answer 출력
console.log(answer);
//3나오도록 구현
