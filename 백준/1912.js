//dp[i] 는 a[i] 가 가장 뒤인 연속된 수 중 가장 큰 값
let cache = [];
function dp(n, array) {
  if (n === 1) {
    cache[n] = array[n];
    return cache[n];
  }
  if (cache[n] != -Infinity) {
    return cache[n];
  }
  cache[n] = Math.max(dp(n - 1, array) + array[n], array[n]);
  return cache[n];
}
function solution(input) {
  let [N, numbers] = input.split("\n");
  N = Number(N);
  numbers = numbers.split(" ").map((x) => Number(x));
  numbers = [undefined, ...numbers];
  cache = new Array(N + 1).fill(-Infinity);
  dp(N, numbers);
  const result = Math.max(...cache);
  console.log(result);
}
const input = require("fs").readFileSync("/dev/stdin").toString();
solution(input);
