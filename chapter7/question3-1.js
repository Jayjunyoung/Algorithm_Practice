const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");
let maxLen = Math.max(...input.map((el) => el.length));
let result = "";

for (let i = 0; i < maxLen; i++) {
  //열 의미
  for (let j = 0; j < input.length; j++) {
    //행 의미
    if (input[j][i] === undefined) continue;
    else result += input[j][i];
  }
}

console.log(result);
