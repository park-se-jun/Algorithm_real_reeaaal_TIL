function solution(numbers) {
  let set = new Set(numbers);
  numbersSum = 0;
  set.forEach((element) => {
    numbersSum += element;
  });

  var answer = 45 - numbersSum;
  return answer;
}
