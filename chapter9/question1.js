const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n"); //여기서 map을 하면 안됌

for (let i = 0; i < input.length - 1; i++) {
  let [n1, n2] = input[i].split(" ").map((num) => Number(num));
  if (n2 % n1 === 0) {
    console.log("factor");
  } else if (n1 % n2 === 0) {
    console.log("multiple");
  } else {
    console.log("neither");
  }
}
