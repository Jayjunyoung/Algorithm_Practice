let input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .split("\n");

const n1 = +input.shift();

let array = [];
let sum = 0;

for (let i = 0; i < n1; i++) {
  const value = input[i];
  if (value === 0) {
    array.pop();
  } else {
    array.push(value);
  }
}

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(sum);
