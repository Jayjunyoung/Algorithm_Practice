const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [yMax, xMax] = input.shift().split(" ");

//미로 경로 배열
const map = input.map((v) => v.split("").map((x) => +x));

const queue = [[0, 0, 1]];
//초기값으로 두기

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

//여기부터 코드가 어려움
while (queue.length) {
  const [x, y, dis] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const xPos = x + dir[i][0];
    const yPos = y + dir[i][1];

    if (0 <= xPos && yPos > -1 && xPos < xMax && yPos < yMax) {
      //이동가능하면
      if (map[yPos][xPos] === 1) {
        map[yPos][xPos] = dis + 1;
        queue.push([xPos, yPos, dis + 1]);
      }
    }
  }
}

console.log(map[yMax - 1][xMax - 1]);
