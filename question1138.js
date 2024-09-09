const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
let list = input.shift().split(" ").map(Number); //2,1,1,0
let people = [];

for (let i = n - 1; i >= 0; i--) {
  people = people.slice(0, list[i]).concat([i + 1, ...people.slice(list[i])]);
}
console.log(people.join(" "));
