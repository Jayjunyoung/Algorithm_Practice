let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

//숫자형으로 처리
const iter = Number(input.shift());

let arr = [];

// 2차원 배열 생성하기
for (let i = 0; i < iter; i++) {
  // input[i]를 하나의 배열로 만든 뒤, arr 배열에 push.
  //ex. [3,4] [1,2] 처럼 배열이 또 만들어지고 이거를 arr에 푸쉬
  //즉 [ [3,4], [1,2], [4,5], [8.9] ]
  arr.push(input[i].split(" ").map((item) => Number(item)));
}

// 2차원 배열에서의 오름차순 정렬 구현
// 기존 1차원 배열에서 쓰던 것에 []를 붙여서 사용한다고 생각하면 이해가 매우 쉽다.
arr.sort((a, b) => {
  // arr[0][0]과 arr[1][0], arr[1][0]과 arr[2][0]...이런 식으로 생각하면 된다.
  if (a[1] === b[1]) {
    // 여기서는 arr[0][1]과 arr[1][1]을 빼준다
    return a[0] - b[0];
  } else {
    //아니면 a[0][0]-a[1][0]해주기
    return a[1] - b[1];
  }
});

//3 4
//1 1 결과들을 담기위한 배열
let ans = [];

for (let i = 0; i < iter; i++) {
  let answer = arr[i].join(" ");
  ans.push(answer);
}

console.log(ans.join("\n"));
