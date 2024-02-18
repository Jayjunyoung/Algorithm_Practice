const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

const M = input.shift(); //60
const N = input.shift(); //100

//배열 만들때 +1해서 만들어주기
const array = Array(N - M + 1)
  .fill()
  .map((_, index) => M + index);

const answer = array.filter((num) => {
  //2부터 자기 보다 작은 숫자까지 범위 늘리고 num%2를 통해 소수 판단
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; //소수 일 경우 return false
    }
  }
  return num > 1;
});

if (answer.length) {
  //ES6 문법 이자 0생략하는 방법
  //answer.reduce((num, price) => sum+=prime);
  console.log(answer.reduce((sum, prime) => sum + prime, 0));
  console.log(answer[0]);
} else {
  console.log(-1);
}
