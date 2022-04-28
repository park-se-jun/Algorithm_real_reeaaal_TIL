/** input :
 *  1 2 */

const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().trim();
function solution(input) {
  const [T, ...inputs] = input.split("\n");

  // inputs.forEach((element) => {
  //   const [first, second] = element.split(" ");
  //   const answer = parseInt(first, 10) + parseInt(second, 10);
  //   console.log(answer);
  // });

  for (element of inputs) {
    const [first, second] = element.split(" ");
    const answer = parseInt(first, 10) + parseInt(second, 10);
    console.log(answer);
  }

  // for (let i = 0; i < T; i += 1) {
  //   const [first, second] = inputs[i].split(" ");
  //   const answer = parseInt(first, 10) + parseInt(second, 10);
  //   console.log(answer);
  // }
}

solution(input);
