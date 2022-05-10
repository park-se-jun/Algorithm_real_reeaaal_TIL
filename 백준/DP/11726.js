let cache = []; //배열크기  N + 1로
function recursive(N) {
  //기저
  if (N === 1) return 1;
  if (N === 2) return 2;
  if (cache[N] != null) {
    return cache[N];
  }
  cache[N] = (recursive(N - 1) + recursive(N - 2)) % 10007;
  return cache[N];
}
function solution(input) {
  const N = Number(input);
  const cacheSize = N + 1;
  cache = new Array(cacheSize).fill(null);
  result = recursive(N);
  console.log(result);
}
const input = require("fs").readFileSync("./input.txt").toString();
solution(input);
