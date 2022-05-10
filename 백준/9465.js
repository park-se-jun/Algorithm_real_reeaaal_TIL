let cache = [];
/**
 *          0번째가 시작, 1번째가 시작, max
 * n의 크기
 */
let max = [];
function dp(n, startYIndex, board) {
  if (n === 1) {
    cache[1][0] = board[0][0];
    cache[1][1] = board[1][0];
    max[n] = Math.max(cache[n][0], cache[n][1]);
    return cache[1][2];
  }
  if (n === 2) {
    cache[2][0] = board[0][0] + board[1][1];
    cache[2][1] = board[1][0] + board[0][1];
    max[n] = Math.max(cache[n][0], cache[n][1]);
    return cache[2][2];
  }
  if (cache[n][2] != undefined) {
    return cache[n][2];
  }
  chache[n][startYIndex] = Math.max(max[n - 2]);
  return cache[n][startYIndex];
}
function solution(input) {
  let [T, N, board] = input.split("\n");
  T = Number(T);
  N = Number(N);
  for (let i = 0; i < T; i++) {}
}
