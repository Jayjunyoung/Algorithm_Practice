const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const maps = input.map((line) => line.split("").map(Number));

function bfs(N, K, maps) {
  const queue = [[0, 0, 0]]; // [position, row, time] 초기 상태는 첫줄의 첫 위치에 첫 타임
  const visited = Array.from({ length: 2 }, () => Array(N).fill(false));
  visited[0][0] = true; //시작점 방문 처리

  while (queue.length > 0) {
    const [row, position, time] = queue.shift();

    // 현재 위치가 N 이상이면 성공적으로 탈출
    if (position >= N) {
      return 1;
    }

    // 현재 시간이 지나서 이 위치에 더 이상 머물 수 없으면 스킵
    if (position < time || maps[row][position] === 0) continue;
    // 1. 현재 줄에서 한 칸 앞으로 이동 (안전한 칸이어야 이동 가능)
    if (
      position + 1 < N &&
      !visited[row][position + 1] &&
      maps[row][position + 1] === 1
    ) {
      visited[row][position + 1] = true;
      queue.push([row, position + 1, time + 1]);
    }

    // 2. 현재 줄에서 한 칸 뒤로 이동 (안전한 칸이어야 이동 가능)
    if (
      position - 1 > time &&
      position - 1 >= 0 &&
      !visited[row][position - 1] &&
      maps[row][position - 1] === 1
    ) {
      visited[row][position - 1] = true;
      queue.push([row, position - 1, time + 1]);
    }

    // 3. 반대 줄로 K 칸 앞 이동 (안전한 칸이어야 이동 가능)
    const newRow = 1 - row; // 반대 줄 -> row가 0일때 newRow는 1
    if (position + K < N) {
      if (!visited[newRow][position + K] && maps[newRow][position + K] === 1) {
        visited[newRow][position + K] = true;
        queue.push([newRow, position + K, time + 1]);
      }
    } else {
      // N을 넘어서면 탈출 성공
      return 1;
    }
  }

  return 0;
}

// BFS 실행 및 결과 출력
console.log(bfs(N, K, maps));
