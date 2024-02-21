const input = require("fs").readFileSync(0, "utf-8").toString().split(" ");

let n1 = input.map((num) => Number(num));

let origin = [1, 1, 2, 2, 2, 8];

//origin을 기준으로 mapping해서 origin의 요소 - n1의 idx들을 차례대로 빼주기
let result = origin.map((item, idx) => {
  return item - n1[idx];
});

console.log(result.join(" "));
