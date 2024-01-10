const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

let hour = parseInt(inputData[0]);
let minuite = parseInt(inputData[1]);

if (hour === 0 && minuite - 45 < 0) {
  hour = 23;
  minuite = 60 + (minuite - 45);
  console.log(hour, minuite);
} else if (minuite - 45 < 0) {
  hour = hour - 1;
  minuite = 60 + (minuite - 45);
  console.log(hour, minuite);
} else if (b - 45 > 0) {
  minuite = minuite - 45;
  console.log(hour, minuite);
} else if (minuite - 45 === 0) {
  minuite = 0;
  console.log(hour, minuite);
}
