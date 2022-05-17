let dy = [1, -1, 0, 0, 1, -1, 1, -1]; //8방향으로 움직일 수 있음
let dx = [0, 0, 1, -1, 1, -1, -1, 1];
let board ;
let discovered;
function dfs(hereY, hereX, w, h) {
  discovered[hereY][hereX] = true;
  for (let i = 0; i < 8; i += 1) {
    let thereY = hereY - dy[i];
    let thereX = hereX - dx[i];
    if (thereY < 0 || thereX < 0 || thereY >= h || thereX >= w) continue;
    else {
      if (board[thereY][thereX] === 1 && !discovered[thereY][thereX]) {
        //board에 있는데, 방문하지 않았다면
        dfs(thereY, thereX, w, h);
      }
    }
  }
}
function getNumberOfIsland(w, h) {
  let numberOfIsland = 0;
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      if (board[y][x] === 1 && !discovered[y][x]) {
        dfs(y, x, w, h);
        numberOfIsland += 1;
      }
    }
  }
  return numberOfIsland;
}
function solution(input) {
  let w = Infinity;
  let h = Infinity;
  let lines = input.split("\n");
  let result = [];
  while (true) {
    let [firstLine, ...rest] = lines;
    [w, h] = firstLine.split(" ").map((x) => Number(x));
    if(w===0&&h===0) break;
    board = [];
    discovered = [];
    for (let i = 0; i < h; i += 1) {
      let [line, ...next] = rest;
      board.push(line.split(" ").map((x) => Number(x)));
      discovered.push(new Array(w).fill(false))
      rest = next;
    }
    result.push(getNumberOfIsland(w,h));
    lines = rest;
  }
  for(let element of result){
    console.log(element)
  }
}
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
solution(input)