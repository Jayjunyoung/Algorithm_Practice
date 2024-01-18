const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .split("\n");

const [n, m] = input[0].split(" ").map((num) => Number(num));

let array = new Array(n);
for (let i = 0; i < n; i++) {
  array[i] = i + 1;
}

for (let i = 1; i <= m; i++) {
  let [start, end] = input[i].split(" ").map((num) => Number(num));
  let temp = array[start - 1];
  array[start - 1] = array[end - 1];
  array[end - 1] = temp;
}

console.log(array.join(" "));
