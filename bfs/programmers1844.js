function solution(maps) {
  let n = maps.length; // 행의 개수
  let m = maps[0].length; // 열의 개수
  let dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const bfs = () => {
    const queue = [[0, 0, 1]];
    maps[0][0] = 0;

    while (queue.length > 0) {
      const [row, col, distance] = queue.shift();
      if (row === n - 1 && col === m - 1) {
        return distance;
      }

      for (let [r, c] of dir) {
        let newRow = r + row;
        let newCol = c + col;

        if (
          newRow >= 0 &&
          newRow < n &&
          newCol >= 0 &&
          newCol < m &&
          maps[newRow][newCol] === 1
        ) {
          queue.push([newRow, newCol, distance + 1]);
          maps[newRow][newCol] = 0;
        }
      }
    }

    return -1;
  };
  return bfs();
}
