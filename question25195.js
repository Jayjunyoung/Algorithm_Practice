const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const isFan = Array(n + 1).fill(false);

// 간선 정보 입력
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
}

// 팬클럽 곰곰이가 있는 정점 입력
const s = Number(input[m + 1]);
const fanNodes = input.slice(m + 2, m + 2 + s).map(Number);
for (const fanNode of fanNodes) {
  isFan[fanNode] = true;
}

let foundFan = false;
const visited = Array(n + 1).fill(false);

function dfs(node) {
  if (visited[node]) return;
  visited[node] = true;

  if (isFan[node]) {
    foundFan = true;
    return;
  }

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
      if (foundFan) return; // 팬클럽 곰곰이를 찾으면 더 이상 탐색할 필요 없음
      visited[next] = false; //1번 2번 이후 3번에 도달했으니 다시 false로 바꾸고 2번으로 컴백
    }
  }
}

// 정점 1에서 탐색 시작
dfs(1);

// 팬클럽 곰곰이를 찾았다면 "Yes", 그렇지 않다면 "yes" 출력
console.log(foundFan ? "Yes" : "yes");
