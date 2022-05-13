//사이클이 발생해야 1팀이 될 수 있다.
//어느팀에도 속하지 못ㄱ하는 학생들의 수를 계산하는 프로그램 작성
let graph;

//hasCycleDfs에서 구하는 거시기
let discovered;
let finished;
let cycleSize = 0;
function solution(input) {
  let [T, ...remain] = input.split("\n");
  T = Number(T);
  for (let i = 0; i < T; i += 1) {
    let [numberOfVertex, edge, ...next] = remain;
    numberOfVertex = Number(numberOfVertex);
    graph = Array.from({ length: numberOfVertex + 1 }, () => []);
    discovered = new Array(numberOfVertex + 1);
    finished = new Array(numberOfVertex + 1);
    cycleSize = 0;

    remain = next;
    let edges = edge.split(" ").map((x) => Number(x));
    for (let i = 0; i < numberOfVertex; i += 1) {
      graph[i + 1].push(edges[i]);
    }
    for(let i = 1;i<graph.length;i+=1){
        if(discovered[i]===undefined){
            dfs(i);
        }else continue;
    }
    console.log(graph.length -1 -cycleSize);
  }

  function dfs(here) {
    if (discovered[here]) {
      if (finished[here]) {
        //이전에 이미 탐색이 끝났다면
        return;
      } else {
        // 아직 스택에 남아있다면 -> 역방향 그래프
        start = here;
        while (graph[here][0] != start) {
          cycleSize += 1;
          here = graph[here][0];
        }
        cycleSize +=1;
        return;
      }
    }
    discovered[here] = true;
    for (let there of graph[here]) {
        dfs(there);
    }
    finished[here] = true;
  }
}
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
solution(input);
