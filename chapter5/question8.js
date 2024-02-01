const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split(" ");

let countWords = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    countWords++;
  }
}

console.log(countWords);
