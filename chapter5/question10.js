const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .toUpperCase();

let n1 = input.length;

const nStringArray = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};

let result = 0;

for (let i = 0; i < n1; i++) {
  for (let j = 2; j <= 9; j++) {
    if (nStringArray[j].includes(input[i])) {
      result += j + 1;
    }
  }
}
console.log(result);
