const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

let num1 = parseInt(input[0]);

let numbers = input[1].split(" ").map((num) => Number(num));

let max = numbers[0];
let min = numbers[1];

for (let i = 0; i < num1; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);
