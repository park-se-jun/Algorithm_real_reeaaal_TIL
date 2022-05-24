const path = process.platform ==="linux"?"/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();

let [ firstLine,...remain] = input.split("\n");
let[h,w] = firstLine.split(" ").map(Number);
const startPoint = [0,0]
const endPoint = [h-1,w-1]
const board = [];
for(element of remain){
    board.push(element.split(" ").map(Number));
}
if(h%2===1){ //행이 홀수면 => 모두 방문 가능
    //R로 시작 D 후에 L 반복
    //2중 for 문
}else if(w%2===1){// 열이 홀수면 => 모두 방문 가능
    //D로 시작 R 후에 U 반복

}else{// 둘다 짝수면 // 뭔가 조치를 취해야 한다.

}