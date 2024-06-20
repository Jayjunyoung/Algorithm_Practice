const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  //trim추가할려면 위에 , 하고 utf-8추가
  .toString()
  .split("\n");

let N = Number(input.shift());
let arr = input.map((item) => item.split(" ").map(Number));

function Solution(matrix, N) {
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (matrix[i][k] && matrix[k][j]) {
          matrix[i][j] = 1;
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    console.log(matrix[i].join(" "));
  }
}

Solution(arr, N);
