const input = require("fs").readFileSync(0, "utf-8").toString().trim();

const result =
  (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6);
console.log(String(result));
console.log(3);
