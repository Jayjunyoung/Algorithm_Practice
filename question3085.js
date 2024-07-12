const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let candy = input.map((v) => v.split("")); //2차원 배열

let max = 1;

for (let i = 0; i < N; i++) {
  if (max == N) break;
  for (let j = 0; j < N; j++) {
    if (max == N) break;
    candySwap(i, j);
  }
}
console.log(max);

function candySwap(i, j) {
  const dir = [
    [0, 1],
    [1, 0],
  ];
  for (let [x, y] of dir) {
    if (
      //범위 넘어가지 않도록 계산
      i + x > -1 &&
      j + y > -1 &&
      i + x < N &&
      j + y < N &&
      candy[i + x][j + y] != candy[i][j]
    ) {
      //swap 로직 사용
      let temp = candy[i][j];
      candy[i][j] = candy[i + x][j + y];
      candy[i + x][j + y] = temp;
      //행, 열 갯수 계산해주기
      checkRow();
      checkColumn();
      candy[i + x][j + y] = candy[i][j];
      candy[i][j] = temp;
    }
  }
}

function checkRow() {
  for (let i = 0; i < N; i++) {
    let checkArr = [1];
    for (let j = 1; j < N; j++) {
      checkArr[j] = candy[i][j - 1] == candy[i][j] ? checkArr[j - 1] + 1 : 1;
    }
    max = Math.max(...checkArr, max);
  }
}

function checkColumn() {
  for (let i = 0; i < N; i++) {
    let checkArr = [1];
    for (let j = 1; j < N; j++) {
      checkArr[j] = candy[j - 1][i] == candy[j][i] ? checkArr[j - 1] + 1 : 1;
    }
    max = Math.max(...checkArr, max);
  }
}
