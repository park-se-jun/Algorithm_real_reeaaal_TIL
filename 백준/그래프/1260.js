const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let graph;
let visited = [];
function solution(input) {
  let [firstLine, ...remain] = input.split("\n");
  let [vertex, edge, start] = firstLine.split(" ").map((x) => Number(x));
  graph = Array.from({ length: vertex + 1 }, () => {
    return new Array(vertex + 1).fill(0);
  });
  for (element of remain) {
    let [a, b] = element.split(" ").map((x) => Number(x));
    graph[a][b] += 1;
    graph[b][a] += 1;
  }
  console.log(dfs(start, vertex).join(" "));
  console.log(bfs(start, vertex).join(" "));
}
function dfs(here, numberOfVertex) {
  if (visited.length === 0) {
    visited = new Array(numberOfVertex + 1).fill(false);
  }
  visited[here] = true;
  const order = [here];
  for (let i = 0; i < numberOfVertex + 1; i += 1) {
    if (graph[here][i] > 0) {
      const there = i;
      if (!visited[there]) {
        order.push(...dfs(there, numberOfVertex, visited));
      }
    }
  }
  return order;
}
function bfs(start, numberOfVertex) {
  let q = [];
  let order = [];
  let discovered = new Array(numberOfVertex + 1).fill(false);
  q.push(start);
  discovered[start] = true;
  while (q.length != 0) {
    let here = q.shift();
    order.push(here);
    for (let i = 1; i < numberOfVertex + 1; i += 1) {
      if (graph[here][i] != 0) {
        let there = i;
        if (!discovered[there]) {
          q.push(there);
          discovered[there] = true;
        }
      }
    }
  }
  return order;
}
solution(input);
