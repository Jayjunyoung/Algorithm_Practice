const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  //trim추가할려면 위에 , 하고 utf-8추가
  .toString()
  .split("\n");

const [n, d] = input.shift().split(" ").map(Number); //d가 의미하는 것: 고속도로의 길이
//dist 배열은 각 지점까지의 최단 거리를 저장한다. 초기값은 모두 무한대로 설정.
//graph 배열은 인접 리스트 형태로, 각 지점에서 갈 수 있는 지름길을 저장한다.
let dist = Array(d + 1).fill(Infinity);
const graph = Array.from({ length: d + 1 }, () => []);

for (let i = 0; i < n; i++) {
  const [start, end, w] = input[i].split(" ").map(Number);
  if (end > d) continue;
  if (end - start <= w) continue;
  graph[start].push([end, w]);
}

let prev = -1;
for (let i = 0; i <= d; i++) {
  if (i) prev = dist[i - 1]; // 현재 위치 i에 도달하기 위한 이전 위치(i-1)까지의 최단 거리

  dist[i] = Math.min(dist[i], prev + 1); // 이전 위치에서 한 칸 이동한 거리와 현재까지의 거리를 비교하여 최단 거리 선택

  for (let [next, cost] of graph[i]) {
    // 현재 위치 i에서 갈 수 있는 지름길 확인
    if (dist[next] > dist[i] + cost) {
      // 지름길을 통해 next에 도달하는 거리보다 기존 거리가 짧으면 업데이트
      dist[next] = dist[i] + cost;
    }
  }
}

console.log(dist[d]);
