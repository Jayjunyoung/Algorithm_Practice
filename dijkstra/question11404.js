const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  //trim추가할려면 위에 , 하고 utf-8추가
  .toString()
  .split("\n");

//3줄 코드 완성하기
const [n, m, ...arr] = input;
const busInfo = arr.map((bus) => bus.split(" ").map(Number));
let dist = Array.from({ length: +n + 1 }, () => Array(+n + 1).fill(Infinity));
//위에 3줄 중 1개를 이용해 forEach이용
busInfo.forEach((bus, index) => {
  dist[bus[0]][bus[1]] = Math.min(dist[bus[0]][bus[1]], bus[2]);
});

//플로이드의 핵심
for (let k = 1; k < +n + 1; k++) {
  for (let i = 1; i < +n + 1; i++) {
    for (let j = 1; j < +n + 1; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j] && i !== j) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

//2중 반복문
for (let i = 1; i < +n + 1; i++) {
  for (let j = 1; j < +n + 1; j++) {
    if (dist[i][j] === Infinity) {
      dist[i][j] = 0;
    }
  }
}

//들어갈 코드는?
dist.slice(1).map((t) => {
  console.log(t.slice(1).join(" "));
});
