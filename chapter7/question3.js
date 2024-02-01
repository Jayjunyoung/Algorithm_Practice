const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const n1 = input[i].split("");
  let result = [];

  for (let j = 0; j < n1.length; j++) {
    if (input[j][i] === " ") {
      continue;
    } else {
      result.push(input[j][i]);
    }
  }
}

console.log(result.join(""));
