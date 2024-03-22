const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");
let max = 0;
//초기값 설정
let coord = [1, 1];

//이중 forEach문
input.forEach((row, rIdx) => {
  //1행을 기준으로 열이 바뀌면서 최대값 비교
  row.split(" ").forEach((col, cIdx) => {
    const numCol = Number(col);
    if (numCol > max) {
      max = numCol;
      coord = [rIdx + 1, cIdx + 1];
    }
  });
});

console.log(max + "\n" + coord.join(" "));
