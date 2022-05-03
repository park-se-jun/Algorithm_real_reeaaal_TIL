const MAX = 2500;
const cache = Array.from(Array(MAX), () => Array(MAX).fill(null));
function someObscureFunction(a, b) {
  //기저사례의 처리
  if (a === b /**예시임 */) return 0;
  //사용된적 있다면 "즉시반환"
  if (cache[a][b] !== null) {
    return cache[a][b];
  }
  //일반적인 경우를 계산
  return cache[a][b];
}
