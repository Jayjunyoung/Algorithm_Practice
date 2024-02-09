const input = require("fs").readFileSync(0, "utf-8").toString().trim();

let num = BigInt(input);

console.log(`${num * num * num}`);
console.log("3");
