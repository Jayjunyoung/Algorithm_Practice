let input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const findParent = (parent, x) => {
  if (parent[x] != x) {
    return findParent(parent, parent[x]);
  }
  return parent[x];
};

const unionParent = (parent, a, b, cycled) => {
  a = findParent(parent, a);
  b = findParent(parent, b);
  if (a === b) cycled.push(a);
  if (a < b) parent[b] = a;
  else parent[a] = b;
};

function solution(N, M, graph) {
  let answer = 0;
  const cycled = [];
  const parent = Array.from({ length: N + 1 }, (_, i) => i);
  for (const [a, b] of graph) {
    unionParent(parent, a, b, cycled);
  }
  const parentSet = new Set();
  for (let i = 1; i < N + 1; i++) {
    const x = findParent(parent, i);
    parentSet.add(x);
  }
  //여기가 이해가 안가네.. 왜 newCycled set자료구조를 또 만들지?
  const newCycled = new Set();
  for (const x of cycled) {
    const k = findParent(parent, x);
    newCycled.add(k);
  }
  answer = [...parentSet].length - [...newCycled].length;

  return answer;
}

let idx = 0,
  test = 1;

while (true) {
  const [N, M] = input[idx];
  if (N === 0 && M === 0) break;
  const graph = input.slice(idx + 1, idx + 1 + M);
  treeCount = solution(N, M, graph);
  if (treeCount > 1) {
    console.log(`Case ${test}: A forest of ${treeCount} trees.`);
  } else if (treeCount === 1) {
    console.log(`Case ${test}: There is one tree.`);
  } else {
    console.log(`Case ${test}: No trees.`);
  }
  idx += M + 1;
  test++;
}
