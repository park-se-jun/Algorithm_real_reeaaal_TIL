function getCombinations(array, howManySelected) {
  const result = [];
  if (howManySelected === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    console.log(`${fixed}가 선택된 경우 나머지 :`);
    console.log(rest);
    const combinations = getCombinations(rest, howManySelected - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    result.push(...attached);
  });
  return result;
}
function getPermutations(array, howManySelected) {
  const result = [];
  if (howManySelected === 1) {
    return array.map((element) => [element]);
  }
  array.forEach((fixed, _, origin) => {
    console.log(origin);
    const rest = origin.filter((element) => element != fixed);
    console.log(fixed);
    console.log(rest);
    const permutations = getPermutations(rest, howManySelected - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    result.push(...attached);
  });
  return result;
}

const example = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(getPermutations(example, 2));
// console.log(getPermutations(example, 3));
// console.log(getPermutations(example, 4));
// console.log(getPermutations(example, 5));

// console.log(getCombinations(example, 2));
// console.log(getCombinations(example, 3));
// console.log(getCombinations(example, 4));
// console.log(getCombinations(example, 5));
// console.log(getCombinations(example, 1));
