const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const maps = input.map((line) => line.split("").map(Number));
console.log(maps);
const visited = Array.from({ length: n }, () => Array(m).fill(false));

const bfs = (startX, startY) => {
  const queue = [[startX, startY, 0]];
  visited[startX][startY] = true;
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    const [x, y, distance] = queue.shift();

    for (let [dx, dy] of dir) {
      const newX = x + dx;
      const newY = y + dy;

      // 범위 내에 있고, 아직 방문하지 않은 곳이어야 함
      if (newX >= 0 && newX < n && newY >= 0 && newY < m) {
        if (!visited[newX][newY] && maps[newX][newY] !== 1) {
          visited[newX][newY] = true;
          // 목표 지점(3, 4, 5)에 도달한 경우
          if (maps[newX][newY] >= 3 && maps[newX][newY] <= 5) {
            console.log("TAK");
            console.log(distance + 1); //최단거리를 찾았다면 return 해주는거네
            return;
          }
          // 빈 공간(0)인 경우 탐색 계속 진행
          if (maps[newX][newY] === 0) {
            queue.push([newX, newY, distance + 1]);
          }
        }
      }
    }
  }

  // 목표 지점에 도달하지 못한 경우
  console.log("NIE");
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (maps[i][j] === 2) {
      bfs(i, j);
      return;
    }
  }
}
