const input = require("fs").readFileSync("/codeFile/input.txt").toString();

let n1 = parseInt(input);

for (let i = 0; i < n1; i++) {
  let star = "*";
  console.log(" ".repeat(n1 - (i + 1)) + star.repeat(i + 1));
}
