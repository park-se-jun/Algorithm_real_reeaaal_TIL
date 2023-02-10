//체스판처럼 칠하면 짝수열

const path = process.platform ==="linux"?"/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
let answer = ""
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
    for(let i = 0;i<h;i+=1){
        answer += "R".repeat(w-1);
        if(i != h-1){
            answer += "D";
        }
        answer +="L".repeat(w-1);
        answer+="D";
    }
    console.log(answer);
    return;
}else if(w%2===1){// 열이 홀수면 => 모두 방문 가능
    //D로 시작 R 후에 U 반복
    for(let i = 0;i<w;i+=1){
        answer += "D".repeat(h-1);
        if(i != w-1){
            answer += "R";
        }
        answer +="U".repeat(h-1);
        answer+="R";
    }
    console.log(answer);
    return;

}else{// 둘다 짝수면 // 뭔가 조치를 취해야 한다. 좌표를 합쳤을 때 홀수가 되는 땅들중 최소를 빼고 전부 방문

}