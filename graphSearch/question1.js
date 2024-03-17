//DFS , BFS
let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

let [n, m, v] = input[0].split(" ").map(Number);
//배열 생성
let graph = new Array(n + 1);
//그래프에 빈 배열 넣기(2차원 배열 만들기)
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
//양방향그래프이므로 정점끼리 양쪽에 push 해주기
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
//작은 정점부터 찾아가야 하므로 오름차순 정렬 해주기
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});
//방문한 배열 표시 용도: 일단 0으로 채워
let visited = new Array(n + 1).fill(0);
let answer_dfs = [];
// DFS
function DFS(v) {
  //이미 방문한 곳이면 함수 탈출
  if (visited[v]) return;
  visited[v] = 1;
  answer_dfs.push(v);
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      //현재 정점과 연결된 모든 정점에 대해 재귀 호출
      DFS(next);
    }
  }
}
DFS(v);
console.log(answer_dfs.join(" "));
// BFS
let answer_bfs = [];
//0으로 채우기
visited.fill(0);
function BFS(v) {
  let queue = [v];
  //큐가 빌 떄까지 반복문 돌리기
  while (queue.length) {
    let x = queue.shift();
    //방문한 곳이면 건너 띄어버리기
    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    answer_bfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}
BFS(v);
console.log(answer_bfs.join(" "));
