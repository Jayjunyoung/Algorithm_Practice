const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .split("\n");

let [n1, n2] = input[0].split(" ").map((num) => Number(num));
let arr = [];

for (let i = 0; i < n1; i++) {
  arr[i] = i + 1;
}

for (let i = 1; i <= n2; i++) {
  let [start, end] = input[i].split(" ").map((num) => Number(num));
  const reverseArr = arr.slice(start - 1, end).reverse();
  arr.splice(start - 1, end - start + 1, ...reverseArr);
}

console.log(arr.join(" "));
