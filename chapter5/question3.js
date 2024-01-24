const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");
//큐 자료구조 적용
const result = Array(Number(input.shift()));
input.forEach((item, idx) => {
  result[idx] = item[0] + item.at(-1);
});

console.log(result.join("\n"));
