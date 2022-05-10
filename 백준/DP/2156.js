let list = [];
let cache = [];
function dp(N) {
  if (N === 1) {
    return list[1];
  }
  if (N === 2) {
    return list[1] + list[2];
  }
  if (N === 3) {
    return Math.max(dp(2), list[3] + list[2], list[3] + list[1]);
  }
  if (cache[N] != undefined) {
    return cache[N];
  }
  cache[N] = Math.max(
    dp(N - 1),
    list[N] + dp(N - 2),
    list[N] + list[N - 1] + dp(N - 3)
  );
  return cache[N];
}
function solution(input) {
  const [T, ...drink] = input.split("\n").map((x) => Number(x));
  const cacheSize = T + 1;
  drink.unshift(0);
  list = drink;
  cache = new Array(cacheSize);
  const result = dp(T);
  console.log(result);
}
const input = require("fs").readFileSync("./input.txt").toString().trim();
solution(input);
