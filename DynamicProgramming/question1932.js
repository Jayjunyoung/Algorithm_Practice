const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0]);
const pyramid = Array.from({ length: n }, () => Array(n).fill([]));

// 피라미드 만들기
for (let i = 1; i <= n; i++) {
  const curRow = input[i].split(" ").map(Number);
  pyramid[i - 1].push(...curRow);
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j < pyramid[i].length; j++) {
    if (j === 0) {
      pyramid[i][j] = pyramid[i - 1][j] + pyramid[i][j];
    } else if (j === pyramid[i].length - 1) {
      pyramid[i][j] = pyramid[i - 1][j - 1] + pyramid[i][j];
    } else {
      pyramid[i][j] =
        Math.max(pyramid[i - 1][j - 1], pyramid[i - 1][j]) + pyramid[i][j];
    }
  }
}

/*
for (let i = 1; i < n; i++) {
  for (let j = 0; j < pyramid[i].length; j++) {
    if (j === 0) {
      pyramid[i][j] = pyramid[i - 1][j] + pyramid[i][j];
    } else if (j === pyramid[i].length - 1) {
      pyramid[i][j] = pyramid[i - 1][j - 1] + pyramid[i][j];
    } else {
      pyramid[i][j] =
        Math.max(pyramid[i - 1][j - 1], pyramid[i - 1][j]) + pyramid[i][j];
    }
  }
}*/

console.log(Math.max(...pyramid[n - 1]));
