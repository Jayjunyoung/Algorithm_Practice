const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift()); //4 추출

//소수를 구하기위해 1을 지우고자 shift() 실행
//1을 지운 배열 잘라서 숫자요소로 적용 후 새로운 배열 return
const array = input.shift().split(" ").slice(0, N).map(Number);

const answer = array.filter((number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  } //소수는 1보다 크기때문에 reutrn number > 1;해주기
  return number > 1;
}).length;

//소수의 갯수 찾는 문제
console.log(answer);
