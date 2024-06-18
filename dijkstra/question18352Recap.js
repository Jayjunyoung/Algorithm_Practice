let input = require("fs").readFileSync(0, "utf-8").toString().split("\n");

const [n, m, k, x] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = Array.from({ length: n + 1 }, () => []);
const distances = Array(n + 1).fill(Infinity);
let answer = [];

arr.forEach(([from, to]) => graph[from].push([to]));

const bfs = (start) => {
  const queue = [start];
  distances[start] = 0;

  while (queue.length) {
    const now = queue.shift();
    if (distances[now] === k) {
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
