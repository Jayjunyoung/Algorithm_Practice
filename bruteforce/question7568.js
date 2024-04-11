let input = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .toString()
  .split("\n");

const n = +input.shift();
const people = input.map((line) => line.split(" ").map(Number));
const rank = new Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i !== j && people[i][0] < people[j][0] && people[i][1] < people[j][1]) {
      rank[i]++;
    }
  }
}

console.log(rank.join(" "));
