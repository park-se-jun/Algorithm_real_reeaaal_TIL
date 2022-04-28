/** input :
 *  1 2 */

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString();
function solution(input) {
  const [first, second] = input.split("\n");
  console.log(parseInt(first, 10) + parseInt(second, 10));
}

solution(input);
