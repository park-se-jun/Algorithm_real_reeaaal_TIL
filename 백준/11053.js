let Max = 0;
let list = [];
let cache = [];
function dp(N) {
  if (N === 1) {
    Max = list[N];
    return 1;
  }
  if (cache[N] != undefined) {
    return cache[N];
  }
  cache[N] = 0;
  cache[N] += dp(N - 1);
  if (list[N] > Max) {
    cache[N] += 1;
    Max = list[N];
  }
  return cache[N];
}
function solution(input) {
  let [T, rest] = input.split("\n");
  list = rest.split(" ").map((x) => Number(x));
  T = Number(T);
  list.unshift(0);
  const cacheSize = T + 1;
  cache = new Array(cacheSize);
  const result = dp(T);
  console.log(result);
}
// const input = require("fs").readFileSync("./input.txt").toString().trim();
solution(`3
3 1 2 `);
