function solution(k, dungeons) {
  let answer = [];
  let dungeonsCount = dungeons.length;
  let visited = Array(dungeonsCount).fill(false);
  //3개의 배열이 담겨져있음

  const dfs = (count, k) => {
    answer.push(count);
    dungeons.forEach((dungeon, index) => {
      let [minStamina, useStamina] = dungeon;
      if (k >= minStamina && !visited[index]) {
        visited[index] = true;
        dfs(count + 1, k - useStamina);
        visited[index] = false;
      }
    });
  };
  //dfs 함수 로직에서 에러가 남
  dfs(0, k);
  return Math.max(...answer);
}
