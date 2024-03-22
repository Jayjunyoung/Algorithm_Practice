const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim() //trim()을 통한 공백제거
  .split(" ");

let countWords = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    //각 요소들의 값이 있다면
    countWords++;
  }
}

console.log(countWords);
