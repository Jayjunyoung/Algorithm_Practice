const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split("\n");

let first = parseInt(inputData[0]);
let second = parseInt(inputData[1]);

if (first > 0 && second > 0) {
  console.log(1);
} else if (first < 0 && second > 0) {
  console.log(2);
} else if (first < 0 && second < 0) {
  console.log(3);
} else if (first > 0 && second < 0) {
  console.log(4);
}
