//모의고사
//1초에 N^2까지 허용 //length +1 로 나눈 나머지로다가 거시기 하기
const first = [1, 2, 3, 4, 5];
const second = [2, 1, 2, 3, 2, 4, 2, 5];
const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
function solution(answers) {
  var answer = [];
  let firstScore = 0;
  let secondScore = 0;
  let thirdScore = 0;
  for (let i = 0; i < answers.length; i += 1) {
    if (first[i % first.length] === answers[i]) {
      firstScore += 1;
    }
    if (answers[i] === second[i % second.length]) secondScore += 1;
    if (answers[i] === third[i % third.length]) thirdScore += 1;
  }
  const maxScore = Math.max(firstScore, secondScore, thirdScore);
  console.log(firstScore, secondScore, thirdScore);
  if (maxScore === firstScore) answer.push(1);
  if (maxScore === secondScore) answer.push(2);
  if (maxScore === thirdScore) answer.push(3);
  return answer;
}
