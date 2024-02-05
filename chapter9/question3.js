const input = require("fs")
  .readFileSync("/codeFile/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

for (let i = 0; i < input.length - 1; i++) {
  //-1빼고 반복문 범위 설정
  const num = input[i];
  let sum = 0;
  const arr = [];
  for (let i = 1; i < num; i++) {
    //6,12 일 경우 6이나 12를 제외한 그 전까지의 수를 나눠주기
    if (num % i == 0) {
      sum += i;
      arr.push(i);
    }
  }
  if (sum == num) {
    console.log(`${num} = ${arr.join(" + ")}`);
  } else {
    console.log(`${num} is NOT perfect.`);
  }
}
