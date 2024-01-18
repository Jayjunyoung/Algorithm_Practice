let input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let [n1, n2] = input[i].split(" ").map((num) => Number(num));
  let sum = n1 + n2;

  if (sum === 0) {
    return;
  }
  console.log(sum);
}
