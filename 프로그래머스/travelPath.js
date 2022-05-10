//방향 오일러 경로
let circuit = [];
//10^4개의 공항 N^2 ICN 출발 가능 모두 방문
let graph = {};
function makeGraph(tickets) {
  for (let [a, b] of tickets) {
    if (graph[a] === undefined) {
      graph[a] = [];
    }
    if (graph[b] === undefined) {
      graph[b] = [];
    }
    graph[a].push(b);
  }
  for (nodeName in graph) {
    graph[nodeName].sort();
  }
  console.log(graph);
}
function dfs(here) {
  for (let i = 0; i < graph[here].length; i += 1) {
    while (graph[here]) {
      console.log(graph);
      const there = graph[here].splice(i, 1);
      dfs(...there);
    }
  }
  circuit.push(here);
}
function solution(tickets) {
  var answer = [];
  makeGraph(tickets);
  dfs("ICN");
  console.log(circuit);
  return circuit;
}
