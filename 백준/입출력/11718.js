/** input :
 *  Hello
    Baekjoon
    Online Judge
 */
const fs = require("fs");
const { FsIO, readLineIO } = require("./IO");
function solution(input) {
  console.log(`${input}`);
}
FsIO("./input.txt", solution);
