const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim();

let arr1 = input.split("").join("");
let arr2 = input.split("").reverse().join("");

if (arr1 === arr2) {
  console.log(1);
} else {
  console.log(0);
}
