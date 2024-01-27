const input = require("fs").readFileSync(0, "utf-8").toString().split(" ");

let n1 = input.map((num) => Number(num));

let origin = [1, 1, 2, 2, 2, 8];

let result = origin.map((item, idx) => {
  return item - n1[idx];
});

console.log(result.join(" "));
