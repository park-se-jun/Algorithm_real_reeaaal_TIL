let max;
let graphList = {
  maxVertex() {
    return Object.keys(graphList).length - 1;
  },
};
let visited = []; //boolean Array
function dfsGraphList(here) {
  console.log(`dfs visited ${here}`);
  visited[here] = true;
  for (let i = 0; i < graphList[here].length; i += 1) {
    const there = graphList[here][i];
    if (!visited[there]) {
      dfsGraphList(there);
    }
  }
}
function dfsGraphListAll() {
  visited = new Array(graphList.maxVertex()).fill(false);
  for (i = 0; i < graphList.maxVertex(); i += 1) {
    if (!visited[i]) {
      dfsGraphList(i);
    }
  }
}

let graphMatrix = Array.from(new Array(max), () => new Array(max).fill(0));
function dfsMatrix(here) {
  console.log(`dfs visite ${here}`);
  visited[here] = true;
  for (let i = 0; i < graphMatrix.length; i += 1) {
    const there = graphMatrix[here][i];
    if (!visited[there]) {
      dfsMatrix(there);
    }
  }
}

function dfsMatrixAll() {
  const maxVertex = graphMatrix.length;
  for (let i = 0; i < maxVertex; i += 1) {
    if (!visited[i]) {
      dfsMatrix(i);
    }
  }
}
