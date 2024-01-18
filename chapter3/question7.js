const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .split("\n");

let n1 = parseInt(input[0]);

for (let i = 1; i <= n1; i++) {
  let n2 = input[i].split(" ").map((num) => Number(num));

  let sum = n2[0] + n2[1];

  console.log(`Case #${i}: ${sum}`);
}
