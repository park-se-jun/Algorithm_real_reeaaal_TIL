//bfs로 최소거리 구하기
//
let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
let board = [];
let discovered = [];
function bfs(startY, startX, h,w) {
  let depth = 0;
  let q = [[startY,startX]];
  discovered[startY][startX] = 1;
  while(q.length!= 0){
      let [hereY,hereX] = q.shift();
      for(let i = 0; i<dx.length;i+=1){
          let thereY = hereY + dy[i];
          let thereX = hereX + dx[i];
          if(thereY<0||thereX<0||thereX>=w||thereY>=h) continue;
          if(board[thereY][thereX] === 1 && discovered[thereY][thereX]== 0){
              discovered[thereY][thereX]=discovered[hereY][hereX] +1
              q.push([thereY,thereX]);
              if(thereY===h-1 && thereX === w-1){
                  return;
              }
          }
      }
  }
}
function solution(input){
    [firstLine,...remain] = input.split("\n");
    let [h,w] = firstLine.split(" ").map(Number);
    for(element of remain){
        board.push(element.split("").map(Number));
        discovered.push(new Array(w).fill(0))
    }
    bfs(0,0,h,w);
    console.log(discovered[h-1][w-1])
}
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
solution(input);