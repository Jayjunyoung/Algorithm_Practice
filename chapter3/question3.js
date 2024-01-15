const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString();

const num = parseInt(input);
//바로 입력
let result = 0;
for (let i = 1; i <= num; i++) {
  result = result + i;
}
console.log(result);
