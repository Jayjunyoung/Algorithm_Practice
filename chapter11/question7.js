const input = require("fs").readFileSync(0, "utf-8").trim().split("\n");

let [a, b] = input[0].split(" ").map(Number); //7 7
const c = +input[1];
const n0 = +input[2];

//수학적으로 넘겼어야 했던 문제 , 조건이 만족됬어야함
console.log(+(b <= (c - a) * n0 && c >= a));
