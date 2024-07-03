let inputs = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

inputs.pop(); // 0 제거

let maxInput = Math.max(...inputs);
let maxRange = maxInput * 2;

//예를 들어 입력값이 30인 경우 -> 60까지의 소수임을 판별하는 배열 생성
const isPrimeNumber = Array(maxRange + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(maxRange)); i++) {
  if (isPrimeNumber[i]) {
    for (let j = i * i; j <= maxRange; j += i) {
      isPrimeNumber[j] = false;
    }
  }
}

let results = inputs.map((input) => {
  let count = 0;
  for (let i = input + 1; i <= input * 2; i++) {
    if (isPrimeNumber[i]) {
      count++;
    }
  }
  return count;
});

console.log(results.join("\n"));
