const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m, t] = input.shift().split(" ").map(Number); //6 6 16
//visitied 배열은 어떻게 만들어줘야 하는지//2차원 배열 형태여야함

const maps = input.map((line) => line.split(" ").map(Number));

const directions = [
  [0, 1], //동
  [1, 0], //남
  [0, -1], //서
  [-1, 0], //북
];

const bfs = (startX, startY) => {
  const queue = [[startX, startY, 0]];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[startX][startY] = true;
  let swordDist = Infinity;

  while (queue.length) {
    const [x, y, dist] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return { distance: dist, swordDist };
    }
    if (maps[x][y] === 2) {
      //n-1, m-1이 목표지점을 의미
      swordDist = dist + (n - 1 - x) + (m - 1 - y); // 검을 획득한 후 목표 지점까지의 거리 계산
    }

    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < n && ny < m && !visited[nx][ny]) {
        if (maps[nx][ny] === 0 || maps[nx][ny] === 2) {
          visited[nx][ny] = true;
          queue.push([nx, ny, dist + 1]);
        }
      }
    }
  }

  //도달할 수 없는 경우
  return { distance: Infinity, swordDist };
};

const result = bfs(0, 0);

// 두 경우 중 최단 거리 선택
const minDistance = Math.min(result.distance, result.swordDist);

// 시간 안에 구출 했는지에 따라 다르게 출력
console.log(minDistance <= t ? minDistance : "Fail");
