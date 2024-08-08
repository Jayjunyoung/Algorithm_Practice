const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

while (input.length > 1) {
  const [w, h] = input.shift().split(" ").map(Number);
  let temp = h;
  const graph = [];
  const visited = Array.from({ length: h }, () => Array(w).fill(false));
  while (temp > 0) {
    graph.push(input.shift().split(" ").map(Number));
    temp--;
  } //한 줄씩 내려가면서 그래프를 채우는 용도
  let count = 0;

  const bfs = (x, y) => {
    const dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length) {
      const [x, y] = queue.shift();
      for (let [dx, dy] of dir) {
        const [newX, newY] = [x + dx, y + dy];
        if (newX >= 0 && newX < h && newY >= 0 && newY < w) {
          if (graph[newX][newY] === 1 && visited[newX][newY] === false) {
            visited[newX][newY] = true;
            queue.push([newX, newY]);
          }
        }
      }
    }
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
        count++;
      }
    }
  }

  console.log(count);
}
