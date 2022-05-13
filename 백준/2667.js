let dy = [1, -1, 0, 0];
let dx = [0, 0, 1, -1];
let now = [0, 0];
let board = [];
let discovered = [];
let result = [0];
function bfs(startY, startX, numberTofill) {
  let q = [[startY, startX]];
  discovered[startY][startX] = numberTofill;
  result[numberTofill] += 1
  while (q.length != 0) {
    let [hereY, hereX] = q.shift();

    for (let i = 0; i < 4; i += 1) {
      let thereY = hereY + dy[i];
      let thereX = hereX + dx[i];
      if (
        thereY < 0 ||
        thereX < 0 ||
        thereY >= board.length ||
        thereX >= board.length
      )
        continue;
      if (board[thereY][thereX] != 0&&discovered[thereY][thereX]==0) {
        q.push([thereY, thereX]);
        discovered[thereY][thereX] = numberTofill;
        result[numberTofill] += 1;
      }
    }
  }
}
function bfsAllGraph() {
  let numberTofill = 1;
  for (let y = 0; y < board.length; y += 1) {
    for (let x = 0; x < board.length; x += 1) {
      if (board[y][x] != 0 && discovered[y][x] == 0) {
        result.push(0);
        bfs(y, x, numberTofill);
        numberTofill += 1;
      }
    }
  }
}
function solution(input) {
  let [N, ...rest] = input.split("\n");
  N = Number(N);
  for (element of rest) {
    board.push(element.split("").map((x) => Number(x)));
    discovered.push(new Array(N).fill(0));
  }
  bfsAllGraph();
  result.sort((a,b)=>a-b);
  console.log(result.length-1);
  for(let i = 1;i<result.length;i+=1){
      console.log(result[i])
  }
}
const input = require('fs').readFileSync("/dev/stdin").toString().trim();
solution(input);
