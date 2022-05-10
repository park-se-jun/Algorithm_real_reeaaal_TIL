let cache = new Array(101);
function dp(n) {
  if (n === 1 || n === 2 || n === 3) {
    cache[n] = 1;
    return cache[n];
  }
  if (n === 4 || n === 5) {
    cache[n] = 2;
    return cache[n];
  }
  if (cache[n] != undefined) {
    return cache[n];
  }
  cache[n] = dp(n - 5) + dp(n - 1);
  return cache[n];
}
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let [T, ...remain] = input.split("\n").map((x) => Number(x));
for (let i = 0; i < T; i += 1) {
  const targetNumber = remain[i];
  console.log(dp(targetNumber));
}
