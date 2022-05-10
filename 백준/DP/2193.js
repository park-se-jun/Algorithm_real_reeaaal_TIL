//N*2 배열
let cache = [];
function dp(N, index) {
  if (N === 1) {
    cache[N] = [0n, 1n];
  }
  if (cache[N][index] != undefined) {
    return BigInt(cache[N][index]);
  }
  if (index === 0) {
    cache[N][index] = dp(N - 1, 0) + dp(N - 1, 1);
  } else if (index === 1) {
    cache[N][index] = dp(N - 1, 0);
  }
  return BigInt(cache[N][index]);
}
function solution(input) {
  const N = Number(input);
  const cacheSize = N + 1;
  cache = Array.from(Array(cacheSize), () => new Array(2));
  const answer = dp(N, 0) + dp(N, 1);
  console.log(answer.toString());
}
const input = require("fs").readFileSync("./input.txt").toString();
solution(input);
