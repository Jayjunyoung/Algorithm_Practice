const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let direction = [
  //2차원배열 구조.
  [1, 0, 0],
  [-1, 0, 0],
  [0, 1, 0],
  [0, -1, 0],
  [0, 0, 1],
  [0, 0, -1],
];

function bfs(tmp_q, map, L, R, C) {
  //tmp_q : 시작 노드 의미
  let queue = [tmp_q];
  //시작노드 방문 처리 해주기
  map[queue[0][0]][queue[0][1]][queue[0][2]] = "#";

  while (queue.length) {
    let [l, y, x, cnt] = queue.shift();

    for (const d of direction) {
      let nx = x + d[0];
      let ny = y + d[1];
      let nl = l + d[2];

      if (nx < 0 || ny < 0 || nl < 0 || nx >= C || ny >= R || nl >= L) continue;

      if (map[nl][ny][nx] !== "#") {
        if (map[n1][ny][nx] === "E") return `Escaped in ${cnt + 1} minute(s).`;
        map[nl][ny][nx] = "#";
        queue.push([nl, ny, nx, cnt + 1]);
      }
    }
  }

  return "Trapped!";
}

function findStart(map, L, R, C) {
  //시작 노드 찾는 함수
  for (let i = 0; i < L; i++) {
    for (let j = 0; j < R; j++) {
      for (let k = 0; k < C; k++) {
        if (map[i][j][k] === "S") return [i, j, k, 0];
      }
    }
  }
}

let ans = [];

while (true) {
  //입력한 테스크 케이스가 여러개임
  let [L, R, C] = input.shift().trim().split(" ").map(Number);

  if (L === 0) break;

  let map = []; //이거는 3차원배열이 될것

  for (let i = 0; i < L; i++) {
    let row = [];
    for (let j = 0; j < R; j++) {
      row.push(input.shift().trim().split(""));
    }
    map.push(row);
    input.shift();
  }

  ans.push(bfs(findStart(map, L, R, C), map, L, R, C));
}

console.log(ans.join("\n"));
