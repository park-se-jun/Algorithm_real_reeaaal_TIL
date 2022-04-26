/** input :
 *  Hello
    Baekjoon
    Online Judge
 */
const fs = require("fs");
function FsIO(path, solution) {
  input = fs.readFileSync(path).toString();
  solution(input);
}
function solution(input) {
  console.log(`${input}`);
}
FsIO("./input.txt", solution);
