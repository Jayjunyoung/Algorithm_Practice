const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

let n1 = +input[0];

let output = ""; // 결과를 저장할 변수를 초기화

for (let i = 1; i <= n1; i++) {
  let result = "";

  const [num, inputString] = input[i].split(" ");

  for (let j = 0; j < inputString.length; j++) {
    result += inputString[j].repeat(num);
  }

  output = result + "\n"; // 결과를 문자열에 누적
}

console.log(output); // 반복문 종료 후에 한 번에 출력
