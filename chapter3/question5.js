const fs = require("fs");
let input = fs.readFileSync("/codeFile/input.txt").toString().split(" ");

let long = "";

for (let i = 1; i <= input / 4; i++) {
  long += "long ";
}
console.log(`${long}int`);
