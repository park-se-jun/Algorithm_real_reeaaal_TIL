function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  answer = A.reduce((acc, _, currIndex) => {
    return acc + A[currIndex] * B[currIndex];
  }, 0);
  // console.log(answer)
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  // console.log('Hello Javascript')

  return answer;
}
