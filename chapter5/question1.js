const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

const s1 = input[0].toString();
const s2 = parseInt(input[1]);

console.log(s1[s2 - 1]);
