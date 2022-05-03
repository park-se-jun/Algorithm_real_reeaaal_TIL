function fsIO(path, solution) {
  const fs = require("fs");
  const input = fs.readFileSync(path).toString();
  solution(input);
}

function solution(input) {
  const dayOfMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const dayOfTheWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const startDate = 1;
  const [month, day] = input
    .trim()
    .split(" ")
    .map((x) => Number(x));
  let diffOfDate = 0;
  for (let i = 1; i < month; i++) {
    diffOfDate += dayOfMonth[i];
  }
  diffOfDate += day;
  console.log(dayOfTheWeek[diffOfDate % 7]);
}

fsIO("./input.txt", solution);
