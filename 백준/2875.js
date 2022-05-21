//2명의 여학샐 1명의 남학생
//N명의 여학생 , M 명의 남학생이 팀원을 찾는중
//K명은 반드시 인턴을 참여, but 인턴 뛰면 참가 X
//많은 팀을 만드는게 최선
//한번에 3명씩 빠진다.
function solution(input){
    let[girl,boy,intern] = input.split(" ").map(Number);
    total = girl + boy;
    result = 0;
    while(true){
        if(girl<2) break;
        if(boy<1) break;
        if(total-3<intern) break;
        girl -=2;
        boy -=1;
        total -=3;
        result+=1;
    }
    console.log(result)
}
const path = process.platform === "linux"? "/dev/stdin":"./input.txt"
const input = require("fs").readFileSync(path).toString().trim();
solution(input);