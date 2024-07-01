const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let direction = [
  //2차원배열 구조
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
  map[queue[0][0]][queue[0][1]][queue[0][2]] = "#";

  while (queue.length) {
    let [l, y, x, cnt] = queue.shift();

    for (const d of direction) {
      let nx = x + d[0];
      let ny = y + d[1];
      let nl = l + d[2];

      if (nx < 0 || ny < 0 || nl < 0 || nx >= C || ny >= R || nl >= L) continue;

      if (map[nl][ny][nx] !== "#") {
        if (map[nl][ny][nx] === "E") return `Escaped in ${cnt + 1} minute(s).`;
        map[nl][ny][nx] = "#"; //방문했음 표시
        queue.push([nl, ny, nx, cnt + 1]);
      }
    }
  }

  return "Trapped!";
}

function findStart(map, L, R, C) {
  for (let l = 0; l < L; l++) {
    for (let r = 0; r < R; r++) {
      for (let c = 0; c < C; c++) {
        if (map[l][r][c] === "S") return [l, r, c, 0];
        //시작점이므로 처음 카운트는 0일것
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
