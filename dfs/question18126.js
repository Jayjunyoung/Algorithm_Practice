const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift(); //4

const graph = Array.from({ length: n + 1 }, () => []);
const distance = Array.from({ length: n + 1 }, () => 0);
const visited = Array.from({ length: n + 1 }, () => false);

for (let i = 0; i < n - 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]); //c는 간선의 길이를 의미한다.
  graph[b].push([a, c]);
}

const dfs = (node) => {
  visited[node] = true;
  for (let [nextNode, dist] of graph[node]) {
    if (!visited[nextNode]) {
      distance[nextNode] = distance[node] + dist;
      dfs(nextNode);
    }
  }
};

dfs(1);

console.log(Math.max(...distance));
