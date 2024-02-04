const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

for (let i = 1; i < input.length; i++) {
  console.log(solution(input[i]));
}

function solution(change) {
  let count = [0, 0, 0, 0];
  const coins = [25, 10, 5, 1];
  for (let i = 0; i < coins.length; i++) {
    //map함수로 써서 적용해도 좋을 듯
    count[i] += Math.floor(change / coins[i]);
    change %= coins[i];
  }
  return count.join(" ");
}
