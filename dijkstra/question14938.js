const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

let [n, m, r] = input[0].split(" ").map(Number);
let items = input[1].split(" ").map(Number);

//2차원 배열
let graph = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < 2 + r; i++) {
  let [a, b, l] = input[i].split(" ").map(Number);
  graph[a].push([b, l]);
  graph[b].push([a, l]);
}

function dijkstra(graph, start, n) {
  const distances = Array(n + 1).fill(Infinity);
  distances[start] = 0;

  const priorityQueue = [[0, start]];

  while (priorityQueue.length > 0) {
    const [currentDistance, currentNode] = priorityQueue.shift();

    if (currentDistance > distances[currentNode]) continue;

    for (const [adjacent, weight] of graph[currentNode]) {
      const distance = currentDistance + weight;
      if (distance < distances[adjacent]) {
        distances[adjacent] = distance;
        priorityQueue.push([distance, adjacent]);
        priorityQueue.sort((a, b) => a[0] - b[0]);
      }
    }
  }

  return distances;
}

function getMaxItems(n, m, items, graph) {
  let maxItems = 0;

  for (let i = 1; i <= n; i++) {
    const distances = dijkstra(graph, i, n);
    let totalItems = 0;
    for (let j = 1; j <= n; j++) {
      if (distances[j] <= m) {
        totalItems += items[j - 1];
      }
    }
    maxItems = Math.max(maxItems, totalItems);
  }

  return maxItems;
}

const result = getMaxItems(n, m, items, graph);
console.log(result);
