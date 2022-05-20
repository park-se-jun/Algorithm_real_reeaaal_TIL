function solution(array, commands) {
  let answer = [];

  for (element of commands) {
    const [start, end, Kth] = element;
    const MyArray = array.slice(start - 1, end);
    console.log(MyArray);
    MyArray.sort((a, b) => a - b); //기본정렬 순서는 유니코드를 따르기 때문에 숫자에 맞게 바꿔줘야함 (a,b) =>{} 의 리턴값이 음수라면 a 가 먼저 온다.
    //즉 a-b 로 조건을 설정하면 a 가 b 보다 작을때 앞으로 온다.
    answer.push(MyArray[Kth - 1]);
  }
  console.log(answer);
  return answer;
}
solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
