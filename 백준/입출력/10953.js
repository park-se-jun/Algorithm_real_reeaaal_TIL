/** input :
 *  1 2 */

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
function solution(input) {
  const [T, ...inputs] = input.split("\n");

  for (element of inputs) {
    const [first, second] = element.split(",").map((x) => Number(x));
    const answer = first + second;
    if (answer === 0) {
      continue;
    } else {
      console.log(answer);
    }
  }
}

solution(input);
