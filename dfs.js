let dfsVisited = new Array(vertex).fill(false);
let dfsAnswer = [];
function dfs(start) {
  if (dfsVisited[start]) return;
  dfsVisited[start] = true;
  dfsAnswer.push(start);
  for (let i = 0; i < graph.length; i += 1) {
    if (graph[start][i] != 0) dfs(i);
  }
}
