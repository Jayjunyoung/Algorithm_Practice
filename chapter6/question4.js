const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim();

//문자열 이랑 역으로 순서 바꾼 문자열이랑 비교
let arr1 = input.split("").join("");
let arr2 = input.split("").reverse().join("");

if (arr1 === arr2) {
  console.log(1);
} else {
  console.log(0);
}
