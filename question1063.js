const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [kingPos, stonePos, n] = input.shift().split(" ");
const N = parseInt(n);

const moves = input.slice(0, N);

function posToCoord(pos) {
  const x = pos.charCodeAt(0) - "A".charCodeAt(0) + 1;
  const y = parseInt(pos[1]);
  return [x, y];
}

//console.log에서 함수호출
function coordToPos(x, y) {
  const col = String.fromCharCode("A".charCodeAt(0) + x - 1);
  const row = y.toString();
  //col row 결합해서 문자열 결합
  return col + row;
}

//이동하는 좌표를 그림
const moveMap = {
  R: [1, 0],
  L: [-1, 0],
  B: [0, -1],
  T: [0, 1],
  RT: [1, 1],
  LT: [-1, 1],
  RB: [1, -1],
  LB: [-1, -1],
};

let [kingX, kingY] = posToCoord(kingPos);
let [stoneX, stoneY] = posToCoord(stonePos);

for (let i = 0; i < N; i++) {
  const move = moves[i];
  const [dx, dy] = moveMap[move];

  const newKingX = kingX + dx;
  const newKingY = kingY + dy;

  //좌표 범위 벗어나는지 판단
  if (newKingX < 1 || newKingX > 8 || newKingY < 1 || newKingY > 8) {
    continue;
  }

  //킹이 이동한 위치와 돌의 위치가 같다면
  if (newKingX === stoneX && newKingY === stoneY) {
    const newStoneX = stoneX + dx;
    const newStoneY = stoneY + dy;

    //이동한 돌의 좌표 범위 벗어나는지 판단
    if (newStoneX < 1 || newStoneX > 8 || newStoneY < 1 || newStoneY > 8) {
      continue;
    }

    kingX = newKingX;
    kingY = newKingY;

    stoneX = newStoneX;
    stoneY = newStoneY;
  } else {
    kingX = newKingX;
    kingY = newKingY;
  }
}
//캉의 위치
console.log(coordToPos(kingX, kingY));

//돌의 위치
console.log(coordToPos(stoneX, stoneY));
