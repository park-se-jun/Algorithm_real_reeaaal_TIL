let graph = [];
let visited = [];
howManyNodeInGraph = 0; // 다른사람은 이거 안쓰고 visited에 find 걸어서 길이 구함
function dfs(here) {
  howManyNodeInGraph += 1;
  visited[here] = true;
  for (element of graph[here]) {
    const there = element;
    if (!visited[there]) {
      dfs(there);
    }
  }
}
function nodeDiff(n) {
  visited = new Array(n + 1).fill(false);
  howManyNodeInGraph = 0;
  dfs(1);
  const node1graphSize = howManyNodeInGraph;
  return Math.abs(node1graphSize - (n - node1graphSize));
}
function makeGraph(n, wires) {
  graph = Array.from(Array(n + 1), () => Array());
  for (element of wires) {
    const [a, b] = element;
    graph[a].push(b);
    graph[b].push(a);
  }
}
function solution(n, wires) {
  var answer = Infinity;
  for (let i = 0; i < wires.length; i += 1) {
    const targetWires = wires.slice();
    const deleteEdge = targetWires.splice(i, 1);
    makeGraph(n, targetWires);
    const diff = nodeDiff(n);
    if (answer > diff) {
      answer = diff;
    }
  }
  return answer;
}
