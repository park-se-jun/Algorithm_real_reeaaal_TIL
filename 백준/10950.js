/** input :
 *  1 2 */

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();
function solution(input) {
  const [T, ...inputs] = input.split("\n");
  inputs.forEach((element) => {
    const [first, second] = element.split(" ");
    const answer = parseInt(first, 10) + parseInt(second, 10);
    console.log(answer);
  });
}

solution(input);
