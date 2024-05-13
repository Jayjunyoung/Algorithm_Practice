const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

let lStack = input.shift().split("");
let number = Number(input.shift());
let rStack = [];

for (let i = 0; i < number; i++) {
  const [cmd, value] = input[i].split(" ");
  if (cmd === "L" && lStack.length) rStack.push(lStack.pop());
  else if (cmd === "D" && rStack.length) lStack.push(rStack.pop());
  else if (cmd === "B" && lStack.length) lStack.pop();
  else if (cmd === "P") lStack.push(value);
}
let answer = lStack.join("");
answer += rStack.reverse().join("");
console.log(answer);
