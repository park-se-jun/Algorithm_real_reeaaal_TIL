const dx = [-1, -1, -1, 1, 1, 1, 0, 0];
const dy = [-1, 0, 1, -1, 0, 1, -1, 1];
let boardH;
let boardW;
/**
 *
 * @param {number} y
 * @param {number} x
 */
function inRange(y, x) {
  if (y < 0 || x < 0 || x >= boardW || y >= boardH) return false;
  else return true;
}
/**
 *
 * @param {number} y
 * @param {number} x
 * @param {String} word
 */
function hasWord(y, x, word) {
  if (!inRange(y, x)) return false; //시작위치가 범위 밖이면 바로 리턴
  if (board[y][x] != word.charAt(0)) return false; // 첫글자와 위치가 일치하지 않으면 실패
  if (word.length === 1) return true;
  for(let i = 0 ; i<dx.length;i+=1){
      let nextX = x + dx[i];
      let nextY = y + dy[i];
      if(hasWord(nextY,nextX,word.substring(1)))
      return true;
  }
  return false;
}
