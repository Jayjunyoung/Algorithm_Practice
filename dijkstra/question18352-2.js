let input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

let [n, m, k, x] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const distances = Array(n + 1).fill(Infinity); // 도로의 거리를 카운트하면서 방문 체크에 이용할 배열
let answer = [];

// 단방향 그래프 만들기
arr.forEach(([from, to]) => graph[from].push(to));

const bfs = (start) => {
  const queue = [start];
  distances[start] = 0;

  while (queue.length) {
    const now = queue.shift();
    if (distances[now] == k) {
      answer.push(now);
      continue;
    }
    for (const next of graph[now]) {
      if (distances[next] === Infinity) {
        queue.push(next);
        distances[next] = distances[now] + 1;
      }
    }
  }
};

bfs(x);

if (answer.length) {
  answer = answer.sort((a, b) => a - b).join("\n");
} else {
  answer = -1;
}

console.log(answer);
