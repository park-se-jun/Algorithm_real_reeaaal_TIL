let graph;
let visited;
function makeGraph(size, array) {
  graph = Array.from({ length: size + 1 }, () => []);
  for (let i = 1; i <= size; i += 1) {
    graph[i].push(array[i]);
  }
}

function solution(input) {
  let [T, ...remain] = input.split("\n");
  T = Number(T);
  for (let i = 0; i < T; i += 1) {
    let [size, array, ...next] = remain;
    size = Number(size);
    array = array.split(" ").map((x) => Number(x));
    array.unshift(undefined);
    makeGraph(size, array);

    console.log(dfsAllAndGetcycle());
    
    remain = next;
  }

  function dfsAllAndGetcycle() {
    let cycle = 0;
    visited = new Array(graph.length).fill(false);
    for (let i = 1; i < graph.length; i += 1) {
      if (!visited[i]) {
        cycle += dfs(i, i);
      }
    }
    return cycle;
  }

  function dfs(here, start) {
    let cycle = 0;
    if (visited[here]) {
      if (here === start) return 1;
    }
    visited[here] = true;
    for (const there of graph[here]) {
      cycle = dfs(there, start);
    }
    return cycle;
  }
}
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
solution(input);