const input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

let lStack = input.shift().split("");
let number = Number(input.shift());
let rStack = [];

for (let i = 0; i < number; i++) {
  const [text, n1] = input[i].split(" ");
  //각 스택에 요소가 있어야함을 조건문에 써줘야함
  if (text === "L" && lStack.length) rStack.push(lStack.pop());
  else if (text === "D" && rStack.length) lStack.push(rStack.pop());
  else if (text === "B" && lStack.length) lStack.pop();
  else if (text === "P") lStack.push(n1);
}
let answer = lStack.join("");
answer += rStack.reverse().join("");
console.log(answer);
