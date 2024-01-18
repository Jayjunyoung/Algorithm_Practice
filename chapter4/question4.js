const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

let result = input.map((num) => Number(num));

let max = result[0];
let n = 0;

for (let i = 1; i < result.length; i++) {
  if (max < result[i]) {
    max = result[i];
    n = i;
  }
}

console.log(max);
console.log(n + 1);
