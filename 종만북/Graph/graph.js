let max = 5; //정점의 갯수
//인접리스트 방식의 구현
let graphList = {};
for (let i = 0; i < max; i += 1) {
  graphList[i] = [];
}
//인접 행렬 방식의 구현
let graphMatrix = Array.from(new Array(max), () => Array(max).fill(0));

console.log(graphMatrix);
console.log(graphList);
