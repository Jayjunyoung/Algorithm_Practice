const fs = require("fs");
const inputData = fs.readFileSync(0, "utf8").toString().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A + B);
console.log(A - B);
console.log(A * B);
//정수로 나올려면 이렇게 해야함
console.log(Math.floor(A / B));
console.log(A % B);
