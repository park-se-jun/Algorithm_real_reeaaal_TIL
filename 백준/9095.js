let cache = new Array(11);
function dp(N) {
  if (N === 1) {
    return 1;
  }
  if (N === 2) {
    return 2;
  }
  if (N === 3) {
    return 4;
  }
  if (cache[N] != undefined) {
    return cache[N];
  }
  cache[N] = dp(N - 1) + dp(N - 2) + dp(N - 3);
  return cache[N];
}
function solution(input) {
  const [T, ...cases] = input.trim().split("\n");
  for (elemnt of cases) {
    N = Number(elemnt);
    const result = dp(N);
    console.log(result);
  }
}
const input = require("fs").readFileSync("./input.txt").toString();
solution(input);
