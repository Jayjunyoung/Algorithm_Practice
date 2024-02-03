const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

let n1 = parseInt(input[0]);
let count = 0;

for (let i = 1; i <= n1; i++) {
  let groupN = input[i].split("");
  const used = []; //그룹단어 판단 용도 배열
  let flag = true;

  for (let j = 0; j < groupN.length; j++) {
    let word = groupN[j];
    if (!used.includes(word)) {
      used.push(word);
    } else if (word !== groupN[j - 1]) {
      flag = false;
      break;
    }
  }

  if (flag) {
    count++;
  }
}

console.log(count);
