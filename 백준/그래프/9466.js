//사이클이 발생해야 1팀이 될 수 있다.
//어느팀에도 속하지 못ㄱ하는 학생들의 수를 계산하는 프로그램 작성

//hasCycleDfs에서 구하는 거시기
let discovered;
let finished;
let cycleSize = 0;
let edges;
function solution(input) {
  let [T, ...remain] = input.split("\n");
  T = Number(T);
  for (let i = 0; i < T; i += 1) {
    let [numberOfVertex, edge, ...next] = remain;
    numberOfVertex = Number(numberOfVertex);
    discovered = new Array(numberOfVertex + 1);
    finished = new Array(numberOfVertex + 1);
    cycleSize = 0;

    remain = next;
    edges = edge.split(" ").map((x) => Number(x));
    edges.unshift(undefined);
    for (let i = 1; i < edges.length; i += 1) {
      if (discovered[i] === undefined) {
        dfs(i);
      } else continue;
    }
    console.log(edges.length - 1 - cycleSize);
  }

  function dfs(here) {
    if (discovered[here]) {//이전에 이미 발견 됨
      if (finished[here]) {
        //이전에 이미 탐색이 끝났다면
        return;
      } else {
        // 아직 스택에 남아있다면 -> 역방향 그래프
        start = here;
        while (edges[here] != start) {
          cycleSize += 1;
          here = edges[here];
        }
        cycleSize += 1;
        return;
      }
    }
    discovered[here] = true;
    let there = edges[here];
    dfs(there);

    finished[here] = true;
  }
}
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
solution(input);
