function solution(board, moves) {
  let myboard = board;
  let result = [];
  let answer = 0;
  const boardSize = board.length;
  for (element of moves) {
    for (let i = 0; i < boardSize; i++) {
      const here = myboard[i][element - 1];
      if (here != 0) {
        // 뭐가 있다면
        myboard[i][element - 1] = 0;
        if (result[result.length - 1] === here) {
          result.pop();
          answer += 2;
        } else {
          result.push(here);
        }
        console.log(result);

        break;
      }
    }
  }
  return answer;
}
solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
