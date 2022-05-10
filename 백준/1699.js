//어쩐 자연수 N
//N을 제곱수들의 합으로 표현할때 그 항의 최소 갯수
/**
 * N = 7 => 4  // 2^2 + 1 + 1 + 1
 * N = 13 => 2 // 3^2 + 2^2
 * N에 가장 가까운 제곱수 + 두번째 가까운 제곲수 + .... 가까운 제곱수가 없다면 나머지
 * n-1이 n 에 영향을 준다는 보장이 없음
 * dp[N] = dp[루트(N)의 floor] + dp[N-루트]
 *
 * ------------------------------------------
 * 위의 사례 = 43이 반례
 * 25 + 9 + 9가 됨
 * 가장 큰수부터 빼는것이 항상 최대 이득이 아님(그리디하지 않음)
 * 그렇다면 어떻게 해야하는가?
 * 싹다 비교?
 * d[n] = min (d[i] + d[n-i])
 *
 */
let cache = [];
function dp(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    cache[1] = 1;
    return 1;
  }
  if (Math.floor(Math.sqrt(n)) === Math.sqrt(n)) {
    //제곱수라면
    cache[n] = 1;
    return cache[n];
  }
  if (cache[n] != undefined) {
    return cache[n];
  }
  cache[n] = Infinity;
  for (let i = 1; i ** 2 < n; i += 1) {
    cache[n] = Math.min(cache[n], dp(i ** 2) + dp(n - i ** 2));
  }
  return cache[n];
}
function solution(input) {
  const N = Number(input);
  cache = new Array(N + 1).fill(undefined);
  const result = dp(N);
  console.log(result);
}
// const input = require("fs").readFileSync("/dev/stdin").toString();
const input = "43";
solution(input);
