const Max = 3001;
let sieve = new Array(Max).fill(true);
for (let i = 2; i < Max; i += 1) {
  if (!sieve[i]) continue;
  for (let j = i + i; j < Max; j += i) {
    sieve[j] = false;
  }
}
