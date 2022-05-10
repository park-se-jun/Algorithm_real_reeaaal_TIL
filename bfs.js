let bfsAnswer = [];
function bfs(start) {
  let q = [start];
  let bfsDiscovered = new Array(n + 1).fill(false);
  bfsAnswer.push(start);
  bfsVisited[start] = ture;
  while (q.length != 0) {
    const here = q.shift();
    for (let i = 0; i < graph.length; i += 1) {
      if (graph[here][i] != 0) {
        if (!bfsDiscovered[i]) {
          bfsDiscovered[i] = ture;
          q.push(i);
        }
      }
    }
  }
}
