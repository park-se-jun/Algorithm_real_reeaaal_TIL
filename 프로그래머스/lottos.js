function solution(lottos, win_nums) {
  let isZero = 0;
  let isOverlap = 0;
  lottos.forEach((i) => {
    if (i === 0) isZero += 1;
    win_nums.forEach((j) => {
      if (i === j) isOverlap += 1;
    });
  });
  const maxHit = isZero + isOverlap;
  const minHit = isOverlap;

  const answer = [];
  answer.push(coculateRank(maxHit));
  answer.push(coculateRank(minHit));
  console.log(answer);
  return answer;
}
function coculateRank(Hit) {
  switch (Hit) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}
solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
