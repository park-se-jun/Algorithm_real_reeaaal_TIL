/**
 *  if( N 이 홀수 라면)
 * 총 채워야하는 갯수는 홀수개가 됨
 *  -> 싹다 0
 *  N = 1
 *  0 개
 * N = 2
 *  3개
 *  -   가로로 3개
 *  - 아래에 가로 박아놓기
 *  - 위에 가로 박아놓기
 * N = 3
 *  0개
 * N = 4
 *  - 가로로 3개 박기 (N-2 개 설치) 3개
 *  - 아래에 가로 박아두기 (N-2개 설치) 3개
 *  - 위에 가로 박아두기 (N-2개 설치) 3개
 *  - 가로 아래에 박고 세로 1개 새우기 1개 (N-4개 설치)
 *  - 가로 위에 박고 세로 1개 새우기 1개  (N-4개 설치)
 *
 */
cache = new Array(31);
function dp(n) {
  if (n % 2 === 1) {
    cache[n] = 0;
    return cache[n];
  }
  if (n === 2) {
    cache[n] = 3;
    return cache[n];
  }
  cache[n] = dp(n - 2) * 3 + 2;
  for (let i = 4; i < n; i += 2) {
    cache[n] += dp(n - i) * 2;
  }
  return cache[n];
}
console.log(dp(12));
