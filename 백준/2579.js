//계단 배열 array
// dp[i] : i 번쨰 계단이 마지막이 되는 계단중 가장 큰 값
let cache = [];
function dp(n, array) {
  if (n === 1) {
    cache[1] = array[n];
    return cache[1];
  }
  if (n < 1) {
    return 0;
  }
  if (cache[n] != -1) {
    return cache[n];
  }
  //cache[n] 이 될 수 있는 경우의 수
  //1. cache[n-1] 이 차있고 cache[n-2]는 비어있다
  //2.  cache[n-1]이 비어있다.
  //case 1
  let case1 = array[n] + array[n - 1] + dp(n - 3, array);
  let case2 = array[n] + dp(n - 2, array);
  cache[n] = Math.max(case1, case2);
  return cache[n];
}
function solution(input) {
  let [N, ...numbers] = input.split("\n");
  N = Number(N);
  numbers = numbers.map((x) => Number(x));
  numbers = [0, ...numbers];
  cache = new Array(N + 1).fill(-1);
  dp(N, numbers);
  //   cache[N - 1] = 0;
  //   const result = Math.max(...cache);
  console.log(dp(N, numbers));
}
const input = require("fs").readFileSync("/dev/stdin").toString();
solution(input);
