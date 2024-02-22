let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const NM = input.shift().split(" ");
const N = Number(NM[0]); //10
const M = Number(NM[1]); //13

let white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
let black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

let board = [];
for (let i = 0; i < N; i++) {
  //2차원 배열 생성
  //BNBNBN코드들을 한줄씩 뽑은후 ""기준으로 배열 생성
  board[i] = input.shift().split("");
}

let answer = 90;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    check(j, i);
  }
}

function check(x, y) {
  //x에는 j가, y에는 i가 들어감
  let checkWhite = 0;
  let checkBlack = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[i][j] !== white[i - y][j - x]) checkWhite++;
      if (board[i][j] !== black[i - y][j - x]) checkBlack++;
    }
  }

  let min = checkBlack < checkWhite ? checkBlack : checkWhite;

  if (min < answer) answer = min;
}

console.log(answer);
