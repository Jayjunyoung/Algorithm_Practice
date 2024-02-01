const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  console.log(input[i].split("\n").join("\n"));
}
