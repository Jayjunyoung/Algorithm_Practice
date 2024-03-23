const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [yMax, xMax] = input.shift().split(" ");

//미로 경로 배열
const map = input.map((v) => v.split("").map((x) => +x));

const queue = [[0, 0, 1]];
//저기서 1은 이동거리인데 시작좌표를 포함하므로 기본값을 1로 주기
//초기값으로 두기

//동서남북 경로 설정
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

//여기부터 코드가 어려움
while (queue.length) {
  const [x, y, dis] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const xPos = x + dir[i][0];
    const yPos = y + dir[i][1];
    //다음 좌표의 위치를 의미함

    if (0 <= xPos && yPos >= 0 && xPos < xMax && yPos < yMax) {
      //다음좌표의 범위가 올바른지 판단해주고 인접리스트 방식 이용
      if (map[yPos][xPos] === 1) {
        //다음칸이 이동할수 있는 1칸 이라면
        map[yPos][xPos] = dis + 1; //이동거리에 +1을 해준다
        queue.push([xPos, yPos, dis + 1]);
        //큐에 이동을 완료하고 난 좌표와 이동거리를 넣어준다->또 shift()발동해서 다시 미로탐색 시작
      }
    }
  }
}

console.log(map[yMax - 1][xMax - 1]);
