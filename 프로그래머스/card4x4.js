// https://programmers.co.kr/learn/courses/30/lessons/72415
const cardPosition = {
  startNode: undefined, //Node번호
  1: undefined,
  2: undefined,
  3: undefined,
  4: undefined, //카드번호
  5: undefined,
  6: undefined,
  7: undefined,
  8: undefined,
  9: undefined,
  10: undefined,
  11: undefined,
  12: undefined,
  13: undefined,
  14: undefined,
  15: undefined,
  16: undefined,
};
const graph4x4 = [
  [],
  [2, 4, 5, 13],
  [1, 3, 4, 6, 14],
  [1, 2, 4, 7, 15],
  [1, 3, 8, 16],
  [1, 6, 8, 9, 13],
  [2, 5, 7, 8, 10, 14],
  [3, 5, 6, 8, 11, 15],
  [4, 5, 7, 12, 16],
  [1, 5, 10, 12, 13],
  [2, 6, 9, 11, 12, 14],
  [3, 7, 9, 10, 12, 15],
  [4, 8, 9, 11, 16],
  [1, 9, 14, 16],
  [2, 10, 13, 15, 16],
  [3, 11, 13, 14, 16],
  [4, 12, 13, 15],
];
function bfsGetTargetDistance(startNode, targetCard) {
  const queue = []; //방문 예정 큐
  const distance = [];
  distance[startNode] = 0;
  queue.push(start);
  while (!(q.length === 0)) {
    const here = queue.shift();
    for (let i = 0; i < graph4x4[here].length; i++) {
      const there = graph4x4[here][i];
      if (distance[there] === undefined) {
        distance[there] = distance[here] + 1;
        queue.push(there);
        if (cardPosition[there] === targetCard) {
          cardPosition["startNode"] = there;
          return distance[there];
        }
      }
    }
  }
}
function boardToCardPosition(board, row, column) {
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < 4; j += 1) {
      cardPosition[4 * i + j + 1] = board[i][j];
      if (i === row && j === column) {
        cardPosition["startNode"] = 4 * i + j + 1;
      }
    }
  }
}
function getMaxCard(board) {
  const max = -Infinity;
  board.forEach((x) => {
    const rowMax = Math.max.apply(null, x);
    if (rowMax > max) max = rowMax;
  });
  return max;
}
function solution(board, row, column) {
  boardToCardPosition(board, row, column);
  const maxCard = getMaxCard(board);
  //우선순위 가자자리에 있는 경우 == 거리가 1인 경우 : 버튼 1번
  var answer = 0;
  return answer;
}
