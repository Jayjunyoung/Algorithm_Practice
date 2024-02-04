let input = require("fs").readFileSync(0, "utf-8").toString().trim();
let N = parseInt(input);
let dot = 2;
for (let i = 0; i < N; i++) {
  dot += Math.pow(2, i);
}
console.log(Math.pow(dot, 2));
