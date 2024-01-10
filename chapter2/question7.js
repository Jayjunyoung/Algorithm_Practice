const fs = require("fs");
const inputData = fs
  .readFileSync(0, "utf8")
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let n1 = inputData[0];
let n2 = inputData[1];
let n3 = inputData[2];

if (n1 === n2 && n2 === n3) {
  console.log(10000 + n1 * 1000);
} else if (n1 === n2 || n2 === n3) {
  console.log(1000 + n2 * 100);
} else if (n3 > n1 && n3 > n2) {
  console.log(n3 * 100);
}
