let input = require("fs").readFileSync(0, "utf-8").toString().trim().split("");

const newArray = Number(input.sort((a, b) => b - a).join(""));

console.log(newArray);
