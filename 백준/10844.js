let cache = [];
function dp(N, index) {
  if (N === 1) {
    cache[N] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  }
  if (N === 2) {
    cache[N] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];
  }
  if (index === -1 || index === 10) {
    return 0;
  }
  if (cache[N][index] != undefined) {
    return cache[N][index];
  }
  cache[N][index] = (dp(N - 1, index - 1) + dp(N - 1, index + 1)) % 1000000000;
  //   console.log(cache);
  return cache[N][index];
}
function solution(input) {
  const N = Number(input);
  const cacheSize = N + 1;
  let result = 0;
  cache = Array.from(Array(cacheSize), () => new Array(10));
  for (let i = 0; i < 10; i++) {
    result += dp(N, i);
  }
  console.log(result % 1000000000);
}

const input = require("fs").readFileSync("./input.txt").toString();
solution(input);
