const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
// let input = fs.readFileSync("./input.txt").toString();

// 입력값 정제
const [n, m] = input[0].split(" ");

let newMatrixA = [];
let newMatrixB = [];

for (let i = 1; i < input.length; i++) {
  let newArr = input[i].split(" ").map((item) => Number(item));

  if (i <= n) {
    //2차원배열 생성
    newMatrixA.push(newArr);
  } else {
    newMatrixB.push(newArr);
  }
}

// 풀이
function solution(n, m, newMatrixA, newMatrixB) {
  const answerMatrix = [];

  for (let i = 0; i < n; i++) {
    answerMatrix.push([]);
    for (let j = 0; j < m; j++) {
      answerMatrix[i].push(newMatrixA[i][j] + newMatrixB[i][j]);
    }
  }

  return answerMatrix;
}

// 출력(문자열)
let answerStr = "";
let answerMatrix = solution(n, m, newMatrixA, newMatrixB);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    answerStr += `${answerMatrix[i][j]}`;
  }
  answerStr += `\n`;
}

console.log(answerStr);
