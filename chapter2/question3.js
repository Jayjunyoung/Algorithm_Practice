const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

let year = parseInt(inputData[0]);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
