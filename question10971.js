const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
let cities = input.map((city) => city.split(" ").map(Number));
let visited = Array.from({ length: n + 1 }, () => false); //[false, false. false. false, false]
const list = [];
let selected = [];

const dfs = (depth) => {
  if (depth === n) {
    let result = 0;
    for (let i = 0; i < n; i += 1) {
      let start = selected[i]; //출발하는 도시
      let end = selected[i + 1]; //도착하는 도시
      //맨 마지막 도시인 경우, 맨 처음 도시로 가는 경로 설정
      if (end === undefined) end = selected[0];

      //i에서 j로 가는 길이 있을 경우 result에 누적해준다.
      if (cities[start][end] !== 0) {
        result += cities[start][end];
      } else return;
    }
    list.push(result);
    return;
  }

  for (let i = 0; i < n; i += 1) {
    if (visited[i]) continue; //방문했던 도시 제외
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
};

dfs(0);
const answer = Math.min(...list); //경우의 수들 중에서 가장 작은 값
console.log(answer);
