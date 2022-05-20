// 하노이탑 완전 dp
//return n개의 원판을 옮기는 최소의 방법
//1개의 원판 옮기는 최고 = 1
//2의 원판 옮기는 최소 = 1개의원판 옮기기 + 1 + 1개의원판 옮기기;
//3 3개의 원판을 옮기는 최소 = 2개의 원판 옮기기 + 1 + 2개의 원판 옮기기
// n개의 원판 옮기는 최소 = 2*n-1개의 원판 + 1
// 솔루션을 제공해라
//n개의 원판을 start에서 end로 옮기는 방법의 배열 구하기
//n개의 원판을 1개의 원판을 1->2로
//n-1개의 원판을 1->3으로
function dp(n, start, end) {
  const middle = [1, 2, 3].filter(
    (element) => element != start && element != end
  )[0];
  if (n == 1) {
    return [[start, end]];
  }
  let result = dp(n - 1, start, middle);
  result.push([start, end]);
  result.push(...dp(n - 1, middle, end));
  return result;
}
function solution(n) {
  return dp(n, 1, 3);
}
