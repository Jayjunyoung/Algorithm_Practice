const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split(" ");

let [n1, n2] = input;
let max = 0;

let n1Reverse = n1.split("").reverse().join("");
let n2Reverse = n2.split("").reverse().join("");

if (n1Reverse > n2Reverse) {
  max = n1Reverse;
} else {
  max = n2Reverse;
}

console.log(max);
