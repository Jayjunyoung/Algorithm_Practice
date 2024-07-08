const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const [x, y] = input
  .shift()
  .split(" ")
  .map((value) => +value);
const m = Number(input.shift());

const data = input.map((item) => item.split(" ").map((v) => +v));
const graph = Array.from({ length: n + 1 }).map(() => []);
const visited = Array.from({ length: n + 1 }).map(() => false);

// 1촌 관계를 그래프로 정리
for (let i = 0; i < data.length; i++) {
  const [x, y] = data[i];
  graph[x].push(y);
  graph[y].push(x);
}

// 사람수가 1이면 촌수 계산이 불가능하기에 -1 출력
if (n === 1) {
  console.log(-1);
}

const BFS = (start) => {
  const queue = [[start, 0]];

  while (queue.length) {
    let [qx, count] = queue.shift();
    let nearQx = graph[qx]; // 1촌 관계 그래프 가져오기
    if (visited[qx]) continue; // 방문체크
    if (qx === y) return count;
    visited[qx] = true;

    // 1촌 관계 반복문으로 순회
    for (let i = 0; i < nearQx.length; i++) {
      let value = nearQx[i];
      if (visited[value]) continue; // 방문체크
      if (value === y) return count + 1; // y값과 일치하면 +1 해서 출력
      queue.push([value, count + 1]);
    }
  }
  return -1;
};

console.log(BFS(x));
