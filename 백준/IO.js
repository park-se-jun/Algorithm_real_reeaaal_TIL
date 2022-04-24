const { on } = require("events");
const fs = require("fs");
const readline = require("readline");
// fs 이용 모듈
function FsIO(inputPath, solutionCallback) {
  const input = fs.readFileSync(inputPath).toString();
  solutionCallback(input);
}

//readLine 사용 모듈
function readLineIOwithFile(inputPath, solutionCallback) {
  const inputArray = [];
  const rl = readline.createInterface({
    input: fs.createReadStream(inputPath),
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputArray.push(line);
  });
  rl.on("close", () => {
    const input = inputArray.join("\n");
    solutionCallback(input);
    process.exit();
  });
}

function readLineIOwithoutFile(solutionCallback) {
  const inputArray = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputArray.push(line);
  });
  rl.on("close", () => {
    const input = inputArray.join("\n");
    solutionCallback(input);
    process.exit();
  });
}

module.exports.readLineIOwithFile = readLineIOwithFile;
module.exports.readLineIOwithoutFile = readLineIOwithoutFile;
module.exports.FsIO = FsIO;
