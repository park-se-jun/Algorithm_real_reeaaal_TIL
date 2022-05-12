function solution(input) {
  let [firstLine, ...remain] = input.split("\n");
  let [vertex, edge] = firstLine.split(" ").map((x) => Number(x));

  let graph = Array.from(Array(vertex + 1), () => []);

  for (element of remain) {
    let [start, end] = element.split(" ").map((x) => Number(x));
    graph[start].push(end);
    graph[end].push(start);
  }

  let dfsVisited = new Array(vertex + 1).fill(false);
  function dfs(here) {
    if (dfsVisited[here]) return;
    dfsVisited[here] = true;
    for (let there of graph[here]) {
      dfs(there);
    }
  }
  function getConnectedComponent() {
    let dfsAnswer = 0;
    for (let i = 1; i < dfsVisited.length; i += 1) {
      if (dfsVisited[i]) continue;
      else {
        dfs(i);
        dfsAnswer += 1;
      }
    }
    return dfsAnswer;
  }

  console.log(getConnectedComponent());

}
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
solution(input);
