const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");
//배열안에 있는 문자열을 공백으로 나눈다

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
