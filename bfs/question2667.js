const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let size = Number(input.shift());
let houses = input.map((row) => row.split("").map((num) => +num));
let housesByNeighborhood = [];

const dirs = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];

const solution = () => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (houses[i][j]) bfs(i, j);
    }
  }

  // 단지의 크기를 오름차순으로 정렬
  housesByNeighborhood.sort((a, b) => a - b);

  // 총 단지 수 출력
  console.log(housesByNeighborhood.length);

  // 각 단지의 크기 출력
  housesByNeighborhood.forEach((size) => console.log(size));
};

const bfs = (startX, startY) => {
  let result = 0;
  const queue = [[startX, startY]];

  while (queue.length) {
    const [x, y] = queue.shift();

    // 이미 방문한 위치라면 건너뜀
    if (houses[x][y] === 0) continue;

    // 방문 표시 및 집의 수 증가
    houses[x][y] = 0;
    result += 1;
    // 상하좌우 방향으로 탐색
    for (let dir of dirs) {
      const xPosition = x + dir[0];
      const yPosition = y + dir[1];

      if (
        xPosition < 0 ||
        yPosition < 0 ||
        xPosition >= size ||
        yPosition >= size
      )
        continue;

      // 집이 있는 위치를 큐에 추가
      if (houses[xPosition][yPosition]) queue.push([xPosition, yPosition]);
    }
  }

  // 하나의 단지 크기를 배열에 추가
  housesByNeighborhood.push(result);
};

// 솔루션 실행
solution();
