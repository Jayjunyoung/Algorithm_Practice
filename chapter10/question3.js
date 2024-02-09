let ip = require("fs").readFileSync(0, "utf-8").toString().split("\n");
let v = ip[0].split(" ").map(Number);
let x1 = parseInt(v[0]);//5 입력
let y1 = parseInt(v[1]);//5 입력
let x = 0;
let y = 0;
let cx = 0;
let cy = 0;
for (i = 1; i <= 2; i++) {
  let v1 = ip[i].split(" ").map(Number);
  let x2 = parseInt(v1[0]);
  let y2 = parseInt(v1[1]);
  if (x1 == x2) cx++;
  else x = x2;
  if (y1 == y2) cy++;
  else y = y2;
}
console.log(cx == 1 ? x : x1, cy == 1 ? y : y1);
