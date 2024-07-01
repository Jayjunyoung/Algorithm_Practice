const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .trim()
  .toString()
  .split("\n");

const answer = [];
let passPossible = false;
let [L, R, C] = input.shift().split(" ").map(Number);
let visited = Array.from({ length: L + 1 }, Array(C + 1).fill(Infinity));

let newMap = input.map((a) => a.split(""));

const bfs = (start) => {
  const queue = [start];
  answer.push(queue.shift());
  while (queue !== null) {}
};

bfs("S");

if (passPossible === false) {
  console.log("Trapped!");
} else {
  console.log(`Escaped in ${Math.min(...answer)} minute(s)`);
}
