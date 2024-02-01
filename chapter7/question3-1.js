const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");
let maxLen = Math.max(...input.map((el) => el.length));
let result = "";

for (let i = 0; i < maxLen; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === undefined) continue;
    else result += input[j][i];
  }
}

console.log(result);
