let cache = [];
function solution(cacheSize, cities) {
  var answer = 0;
  cache = new Array(cacheSize);
  const myCities = cities.map((element) => element.toLowerCase(0));
  for (element of myCities) {
    const hitIndex = cache.findIndex((x) => element === x);
    if (hitIndex !== -1) {
      //히트할 경우
      const hitItem = cache.splice(hitIndex, 1); // 히트한 아이템을 뺀다
      cache.unshift(hitItem[0]); // 히트한 아이템을 처음에 넣는다
      answer += 1;
    } else {
      cache.pop();
      cache.unshift(element);
      answer += 5;
    }
  }
  console.log(answer);
  return answer;
}
solution(3, [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
]);
//cachesize 는 0~ 30
//최대 도시는 100000 10만, 최대 도시 이름은 20글자
//도시이름 배열을 순서래도 처리핼 때 총 실행 시간을 출력
//LRU least recently uset 오래된거 교체한다.
//hit 일 경우 실행시간은 1
//miss일 경우 실행 시간은 5
//원형큐를사용
[
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
];
