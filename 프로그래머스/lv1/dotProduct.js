function solution(a, b) {
  var answer = 0;
  a.forEach((element, index) => {
    answer += element * b[index];
  });
  return answer;
}
