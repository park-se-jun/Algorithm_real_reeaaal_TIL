let lefthand = {
  x: 0,
  y: 3,
};
let righthand = {
  x: 2,
  y: 3,
};
let goal = {
  x: null,
  y: null,
};
const keypadX = [1, 0, 1, 2, 0, 1, 2, 0, 1, 2];
const keypadY = [3, 0, 0, 0, 1, 1, 1, 2, 2, 2];
function solution(numbers, hand) {
  let answer = "";
  for (element of numbers) {
    switch (element) {
      case 1:
      case 4:
      case 7:
        lefthand.x = keypadX[element];
        lefthand.y = keypadY[element];
        answer += "L";
        break;
      case 3:
      case 6:
      case 9:
        righthand.x = keypadX[element];
        righthand.y = keypadY[element];
        answer += "R";
        break;
      default:
        const leftDiff =
          Math.abs(lefthand.x - keypadX[element]) +
          Math.abs(lefthand.y - keypadY[element]);
        const rightDiff =
          Math.abs(righthand.x - keypadX[element]) +
          Math.abs(righthand.y - keypadY[element]);
        const diffDiff = leftDiff - rightDiff;
        if (diffDiff > 0) {
          righthand.x = keypadX[element];
          righthand.y = keypadY[element];
          answer += "R";
        } else if (diffDiff === 0) {
          if (hand === "left") {
            lefthand.x = keypadX[element];
            lefthand.y = keypadY[element];
            answer += "L";
          } else {
            righthand.x = keypadX[element];
            righthand.y = keypadY[element];
            answer += "R";
          }
        } else if (diffDiff < 0) {
          lefthand.x = keypadX[element];
          lefthand.y = keypadY[element];
          answer += "L";
        }
    }
  }
  console.log(answer);
  return answer;
}
