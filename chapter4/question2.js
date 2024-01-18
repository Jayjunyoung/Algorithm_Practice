const fs = require("fs");
let input = fs.readFileSync(0, "utf-8").toString().split("\n");

let num1 = parseInt(input[0].split(" ")[0]);
let num2 = parseInt(input[0].split(" ")[1]);

let numList = input[1].split(" ").map((num) => Number(num));

let result = [];

for (let i = 0; i < num1; i++) {
  if (numList[i] < num2) {
    result.push(numList[i]);
  }
}

console.log(result.join(" "));
