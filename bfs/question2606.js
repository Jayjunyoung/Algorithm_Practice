const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let n = Number(input.shift());
let m = Number(input.shift());
let graph = Array.from({ length: n + 1 }, () => []);
let visited = Array.from({ length: n + 1 }, () => false);
visited[1] = true;
let count = 0;

for (let i = 0; i < m; i++) {
  //인접그래프 형태의 그래프 완성
  const [first, second] = input[i].split(" ").map(Number);
  graph[first].push(second);
  graph[second].push(first);
}

const dfs = (start) => {
  for (let i of graph[start]) {
    if (!visited[i]) {
      visited[i] = true;
      count++;
      dfs(i);
    }
  }
};

dfs(1);
console.log(count);
