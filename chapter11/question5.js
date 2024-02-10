const input = require("fs").readFileSync(0, "utf-8").toString().trim();

let num = BigInt(input);
//아니면 replace를 통해 n을 제거하는 방법도 존재

console.log(`${num * num * num}`);
console.log("3");
