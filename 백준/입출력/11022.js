/** input :
 *  1 2 */

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
function solution(input) {
  const [T, ...inputs] = input.split("\n");
  let index = 0;
  for (element of inputs) {
    index += 1;
    const [first, second] = element.split(" ").map((x) => Number(x));
    const answer = first + second;
    if (answer === 0) {
      continue;
    } else {
      console.log(`Case #${index}: ${first} + ${second} = ${answer}`);
    }
  }
}

solution(input);
