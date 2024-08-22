const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const findLocationNumber = +input[0]; //35를 의미
const findLocation = [];
const grid = Array.from({ length: n }, () => Array(n).fill(0));

let endNumbers = n * n; //49
let [x, y] = [0, 0];

let dx = [1, 0, -1, 0]; //하 우 상 좌 방향으로 움직일 거임
let dy = [0, 1, 0, -1];
let direction = 0;

while (endNumbers > 0) {
  grid[x][y] = endNumbers;
  if (endNumbers === findLocationNumber) {
    findLocation.push(x + 1, y + 1); //2차원 배열
  }

  const nx = x + dx[direction];
  const ny = y + dy[direction];

  if (nx < 0 || ny < 0 || nx >= n || ny >= n || grid[nx][ny] !== 0) {
    direction = (direction + 1) % 4;
  }

  x += dx[direction];
  y += dy[direction];

  endNumbers--;
}

// 최종 결과 출력
grid.map((x) => console.log(x.join(" ")));
console.log(findLocation[0], findLocation[1]);
