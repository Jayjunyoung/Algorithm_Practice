const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  //trim추가할려면 위에 , 하고 utf-8추가
  .toString()
  .split("\n");

const [n, m, ...arr] = input;
const busInfo = arr.map((bus) => bus.split(" ").map(Number));
const dist = Array.from({ length: +n + 1 }, () => Array(+n + 1).fill(Infinity));

busInfo.forEach((bus) => {
  dist[bus[0]][bus[1]] = Math.min(bus[2], dist[bus[0]][bus[1]]);
});
for (let k = 1; k < +n + 1; k++) {
  for (let i = 1; i < +n + 1; i++) {
    for (let j = 1; j < +n + 1; j++) {
      if (dist[i][k] + dist[k][j] < dist[i][j] && i !== j) {
        dist[i][j] = dist[i][k] + dist[k][j];
      }
    }
  }
}

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
