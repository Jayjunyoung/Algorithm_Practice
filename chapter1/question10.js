const fs = require("fs");
const [A, B] = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const num1 = parseInt(A);
//map을 씀으로써 내부요소를 문자열->숫자로 바꾼다
const num2 = B.split("").map(Number);
let result = num2.reverse().map((x) => x * num1);
result.push(num1 * parseInt(B));

console.log(result.join("\n"));
