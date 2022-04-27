let N = 0;
const gameboard = Array.from(Array(100), () => Array(100));
function jump1(x, y) {
  //기저사례 : 게임판 밖으로 나감
  if (x >= N || y >= N) return false;
  //기저사례 : 게임판의 끝에 도달함
  if (x === N - 1 && y === N - 1) return true;
  return jump1(x + gameboard[x], [y], y) || jump1(x, y + gameboard[x][y]);
}
function jump2(x, y) {
  //기저사례 : 게임판 밖으로 나감
  if (x >= N || y >= N) return false;
  //기저사례 : 게임판의 끝에 도달함
  if (x === N - 1 && y === N - 1) return true;
  if (cache[x][y] != null) return cache[x][y];
  const jumpSize = gameboard[x][y];
  cache[x][y] = Jump2(x + jumpSize, y) || Jump2(x, y + jumpSize);
  return cache[x][y];
}
