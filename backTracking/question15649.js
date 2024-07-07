const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

function solution(n, m) {
  const seq = [...Array(m)].fill(0);
  const visited = [...Array(n + 1)].fill(false); // n+1 크기의 배열 생성
  let result = "";

  function dfs(k) {
    if (k === m) {
      const arr = [];
      for (let i = 0; i < m; i++) {
        arr.push(seq[i]);
      }
      return (result += `${arr.join(" ")}\n`);
    }
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        // 1부터 시작하는 인덱스
        seq[k] = i;
        visited[i] = true;
        dfs(k + 1);
        visited[i] = false;
      }
    }
  }

  dfs(0);
  return result;
}

console.log(solution(n, m));
