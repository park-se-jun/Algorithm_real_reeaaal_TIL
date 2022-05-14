//몇일이 지나면 다 익게 되는지 알고 싶다.
//1일차 ~ n일차 까지 돌리기
//-1은 토마토가 있지 않음
//1은 익은 토마토,
//0은 익지 않은 토마토
//bfs 로 하기
// 0을 만나면
let dy = [1, -1, 0, 0];
let dx = [0, 0, 1, -1];
let day = 0;
let board = [];
let imposible = false;
let nextDayQ = [];
function bfsOneDay(h, w) {
  let q = [...nextDayQ]; //오늘 살필 토마토
  let idx = 0;
  nextDayQ = []; //내일 익을 토마토을 비워주기
  while (q.length !== idx) {
    let [hereY, hereX] = q[idx];
    idx += 1;
    for (let i = 0; i < 4; i += 1) {
      let thereY = hereY + dy[i];
      let thereX = hereX + dx[i];
      if (thereY < 0 || thereX < 0 || thereY >= h || thereX >= w) continue;
      else {
        if (board[thereY][thereX] === 0) {
          //익지않은 토마토라면
          board[thereY][thereX] = 1;
          nextDayQ.push([thereY, thereX]); //내일 익을 토마토들을 큐에 넣는다.
        }
      }
    }
  }
  if (nextDayQ.length == 0 && boxHasZero(board)) {
    //안익은게 남았는데 다음에 익을토마토가 없으면
    imposible = true;
  }
  day += 1; //오늘이 끝나면 하루를 추가한다.
}
function boxHasZero(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === 0) return true;
    }
  }
  return false;
}
function solution(input) {
  let [WandH, ...box] = input.split("\n");
  let [w, h] = WandH.split(" ").map(Number);
  for (element of box) {
    let array = element.split(" ").map(Number);
    let tomatoY = board.length;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === 1) {
        let tomatoX = i;
        nextDayQ.push([tomatoY, tomatoX]);
      }
    }
    board.push(array);
  }
  while (boxHasZero(board)) {
    bfsOneDay(h, w);
    if (imposible) break;
  }
  if (imposible) console.log(-1);
  else console.log(day);
}
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();
solution(input);
