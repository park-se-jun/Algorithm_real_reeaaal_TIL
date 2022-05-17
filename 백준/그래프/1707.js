const RED = 1;
const BLACK = -1;
let graph = [];
let bfsColor;
function bfsIsBinaryGraph(start, color) {
  let q = [start];
  if (bfsColor[start] != undefined) {
    color = bfsColor[start];
  }
  bfsColor[start] = color;
  while (q.length != 0) {
    let here = q.shift();
    color = bfsColor[here];
    if (color === 1) color = -1;
    else if (color === -1) color = 1;
    for (let there of graph[here]) {
      if (bfsColor[there] === undefined) {
        bfsColor[there] = color;
        q.push(there);
      } else if (bfsColor[there] != color) {
        return false;
      }
    }
  }
  return true;
  0;
}
function makeGraph(remain) {
  let [vertex, edge] = remain[0].split(" ").map((x) => Number(x));
  graph = Array.from({ length: vertex + 1 }, () => []);
  for (let i = 1; i < edge + 1; i += 1) {
    const [start, end] = remain[i].split(" ").map((x) => Number(x));
    graph[start].push(end);
    graph[end].push(start);
  }
  bfsColor = new Array(graph.length);
  return remain.slice(edge + 1);
}

function solution(input) {
  const result = [];
  let [T, ...remain] = input.split("\n");

  T = Number(T);
  for (let i = 0; i < T; i += 1) {
    remain = makeGraph(remain);
    for (let j = 1; j < graph.length; j += 1) {
      if (bfsIsBinaryGraph(j, RED) === false) {
        result.push(false);
        break;
      } else if (j === graph.length -1 ) {
        result.push(true);
      }
    }
  }
  
  for(element of result){
    if(element) console.log("YES")
    else console.log("NO");
  }
}

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
solution(input);
