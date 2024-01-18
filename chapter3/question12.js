let input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

let n1 = parseInt(input[0]);

for (let i = 1; i <= n1; i++) {
  let [n1, n2] = input[i].split(" ").map((num) => Number(num));
  let sum = n1 + n2;

  console.log(sum);
}
