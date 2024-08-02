const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
let answer = [];
let max = 0; // 해킹할 수 있는 컴퓨터의 최대 수

for (let i = 0; i < M; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[b].push(a);
}

const hackingCount = Array(N + 1).fill(0);

const BFS = (start) => {
  const queue = [start];
  const visited = Array(N + 1).fill(false);
  visited[start] = true;
  let count = 0; // 해킹 가능한 컴퓨터의 수 카운트

  while (queue.length) {
    let cur = queue.shift();
    count += 1;
    for (let i = 0; i < graph[cur].length; i++) {
      let value = graph[cur][i];
      if (!visited[value]) {
        visited[value] = true;
        queue.push(value);
      }
    }
  }

  return count;
};

for (let i = 1; i <= N; i++) {
  hackingCount[i] = BFS(i);
  if (hackingCount[i] > max) {
    max = hackingCount[i];
  }
}

for (let i = 1; i <= N; i++) {
  if (hackingCount[i] === max) {
    answer.push(i);
  }
}

console.log(answer.join(" "));
