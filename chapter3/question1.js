const fs = require("fs");
const inputData = fs.readFileSync(0, "utf-8").toString(" ").split(" ");

let num = parseInt(inputData[0]);

for (let i = 1; i <= 9; i++) {
  console.log(num, "*", i, "=", num * i);
}
