const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift(); //5가 담겨져 있을 것
const array = input.map((value) => value.split(" ").map(Number));
console.log(array);
