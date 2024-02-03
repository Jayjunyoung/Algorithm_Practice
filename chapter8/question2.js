const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map((item) => Number(item));

let s1 = input[0];
let n1 = input[1];

let ans = s1.toString(n1).toUpperCase();

console.log(ans);
