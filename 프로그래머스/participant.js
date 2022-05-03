//완주하지 모산 선수 이름이 담긴 배열을 return( 동명이인 있을 수 있음)
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  let answer;
  for (let i = 0; i < Infinity; i += 1) {
    if (participant[i] === completion[i]) {
      continue;
    } else {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
