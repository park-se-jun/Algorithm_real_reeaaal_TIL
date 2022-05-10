let cache = [];
/**
 *          0번째가 시작, 1번째가 시작, max
 * n의 크기
 * n,i 를 반드시 포함하는 스티커를 띄는 방법 중 최대
 */
function dp(N, i, array) {
  //i === 1||0
  if (N <= 0) {
    return 0;
  }
  if (N === 1) {
    cache[i][N] = array[i][N];
    return cache[i][N];
  }
  if (cache[i][N] != undefined) {
    return cache[i][N];
  }
  if (i === 0) {
    cache[i][N] =
      Math.max(dp(N - 1, 1, array), dp(N - 2, 1, array)) + array[i][N];
  } else if (i === 1) {
    cache[i][N] =
      Math.max(dp(N - 1, 0, array), dp(N - 2, 0, array)) + array[i][N];
  }
  return cache[i][N];
}
function solution(input) {
  let [T, ...remain] = input.split("\n");
  T = Number(T);
  let result = [];
  for (let i = 0; i < T; i++) {
    let targetBoard = [];
    let [n, boardFirst, boardSecond, ...next] = remain;
    remain = next;
    n = Number(n);
    targetBoard.push(boardFirst.split(" ").map((x) => Number(x)));
    targetBoard.push(boardSecond.split(" ").map((x) => Number(x)));
    cache = Array.from({ length: 2 }, () => new Array(n + 1));
    targetBoard[0].unshift(undefined);
    targetBoard[1].unshift(undefined);
    const maxScore = Math.max(dp(n, 0, targetBoard), dp(n, 1, targetBoard));
    result.push(maxScore);
  }
  for (element of result) {
    console.log(element);
  }
}

const input = require("fs").readFileSync("./input.txt").toString().trim();
solution(input);
