const fs = require("fs");
let input = fs.readFileSync("/codeFile/input.txt").toString();

console.log(`${"long ".repeat(+input / 4)}int`);
