const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift()); //4
const halfN = n / 2; //2
let min = Infinity;

const stats = input.map((stat) => stat.split(" ").map(Number)); //2차원 배열

const check = new Array(n).fill(false); // 체크 배열 초기화 스타트 팀에 구성원을 체크하기 위한 배열

function dfs(L, K) {
  if (L === halfN) {
    // 스타트팀에 N/2 명이 뽑혔다면
    const sTeam = [];
    const lTeam = [];
    let sSum = 0;
    let lSum = 0;
    for (let i = 0; i < n; i++) {
      if (check[i]) sTeam.push(i);
      // 체크 배열은 스타트 팀에 넣어주고, 체크 배열에 없으면 링크 팀에 넣어준다.
      else lTeam.push(i);
    }
    for (let i = 0; i < halfN; i++) {
      for (let j = i + 1; j < halfN; j++) {
        // (i,j), (j,i) 쌍을 계속 더해준다.
        sSum = sSum + stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
        lSum = lSum + stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
      }
    }
    min = Math.min(min, Math.abs(sSum - lSum));
    return;
  }

  for (let i = K; i < n; i++) {
    // 체크 배열을 스타트 팀 구성에 사용한다.
    check[i] = true;
    dfs(L + 1, i + 1);
    check[i] = false;
  }
}
dfs(0, 0);
console.log(min); // 결과 출력
