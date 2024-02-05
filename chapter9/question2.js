const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num)); //여기서 map을 하면 안됌

let [N, K] = input;
let ans = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    ans.push(i);
  }
}
//약수의 개수가 K보다 작으면 ex 25가 4보다 작으면
if (ans.length < K) {
  console.log(0);
} else {
  console.log(ans[K - 1]);
}
