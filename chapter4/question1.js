const fs = require("fs");
let input = fs.readFileSync("/codeFile/input.txt").toString().split("\n");

let n1 = +input[0];
let n2 = input[1].split(" ").map((num) => Number(num));
let n3 = +input[2];

let count = 0;

for (let i = 0; i < n2.length; i++) {
  if (n3 === n2[i]) {
    count = count + 1;
  }
}

console.log(count);
