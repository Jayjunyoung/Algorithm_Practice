const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");
const num = parseInt(input[0]);

//split개념 다시공부
for (let i = 1; i <= num; i++) {
  let score = input[i].split(" ");
  console.log(parseInt(score[0]) + parseInt(score[1]));
}
