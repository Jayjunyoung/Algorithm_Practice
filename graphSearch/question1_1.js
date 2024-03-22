let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const bfs = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);

  while (needVisit.length !== 0) {
    //모든 정점을 다 돌때까지
    const node = needVisit.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      let nodes = graph[node];
      //graph[node]에 속한 자식들을 의미함
      needVisit = [...needVisit, ...nodes.sort((a, b) => a - b)];
    }
  }

  return visited;
};

const dfs = (graph, startNode) => {
  const visited = [];
  let needVisit = [];

  needVisit.push(startNode);
  while (needVisit.length !== 0) {
    const node = needVisit.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      let nodes = graph[node];
      needVisit = [...needVisit, ...nodes.sort((a, b) => b - a)];
    }
  }

  return visited;
};
//4 , 5, 1 입력
let [n, edge, start] = input.shift().split(" ").map(Number);
let grph = [...Array(n + 1)].map((e) => []);
//그래프를 2차원 배열로 만들기

//간선끼리 양방향 그래프이므로 이어주기
for (let i = 0; i < edge; i++) {
  let [from, to] = input[i].split(" ").map(Number);
  grph[from].push(to);
  grph[to].push(from);
}

console.log(dfs(grph, start).join(" "));
console.log(bfs(grph, start).join(" "));
