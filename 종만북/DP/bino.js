/* 일반 적인 재귀호출을 이용한 이산계수 */

function bino(n, r) {
  if (r === 0 || n === r) return 1;
  return bino(n - 1, r - 1) + bino(n - 1, r);
}

const cache = Array.from(Array(30), () => Array(30).fill(-1));
function bino2(n, r) {
  if (r === 0 || r === n) return 1;
  if (cache[n][r] != -1) {
    return cache[n][r];
  }
  return (cache[n][r] = bino2(n - 1, r - 1) + bino2(n - 1, r));
}

console.log(bino(4, 2));
console.log(bino2(4, 2));
