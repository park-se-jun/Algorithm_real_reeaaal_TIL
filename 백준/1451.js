//N과 M 모두 50보다 작다.
//세로로만 자르기 행 갯수가 3보다 커야 한다
//가로로만 자르기 열 갯수가 3보다 커야 한다.
//세로1번 가로1번 자르기 2번 자르고 2개를 합치기 => 1번에 4개 나옴
let targetSqure;

function getSum(startY,startX,endY,endX){
    let sum = 0;
    for(let i = startY;i<=endY;i++){
        for(let j = startX;j<=endX;j++){
            sum += targetSqure[i][j];
        }
    }
    return sum;
}
function solution(input){
    let [firstLine,...squreArray] = input.split("\n");
    let [h,w] =firstLine.split(" ").map(Number);
    let max = 0;
    targetSqure = squreArray.map(element => element.trim().split("").map(Number));
    
    //case1 = 이렇게 자르기
    if(h>=3){
        for(let i = 0; i + 2< h;i++){
            let squre1 = getSum(0,0,i,w-1);
            for(let j = i+1; j+1<h;j++){    
                let squre2 = getSum(i+1,0,j,w-1);
                let squre3 =getSum(j+1,0,h-1,w-1);
                let result = squre1*squre2*squre3
                if(result>max) max = result;
            }
        }
    }


    //case 2 || 이렇게 자르기

    if(w>=3){
        for(let i = 0; i + 2< w;i++){
            let squre1 = getSum(0,0,h-1,i);
            for(let j = i+1; j+1<w;j++){    
                let squre2 = getSum(0,i+1,h-1,j);
                let squre3 =getSum(0,j+1,h-1,w-1);
                let result = squre1*squre2*squre3
                if(result>max) max = result;
            }
        }
    }
    //case 3 가로 세로 자르기
    if(w>=2 && h>=2){
        for(let i =0; i+1<h;i++){
            for(let j = 0;j+1<w;j++){
                let squre1 = getSum(0,0,i,j);
                let squre2 = getSum(0,j+1,i,w-1);
                let squre3 = getSum(i+1,0,h-1,j);
                let squre4 = getSum(i+1,j+1,h-1,w-1);
                let bigSqure = 0;
                let result  = 0;
                //1,2 가 1개의 사각형
                bigSqure = squre1+squre2;
                result = bigSqure * squre3 * squre4;
                if(result>max) max = result;

                //1,3 이 1개의 사각형
                bigSqure = squre1+ squre3;
                result = bigSqure * squre2 *squre4;
                if(result>max) max = result;

                //3,4 가 1개의 사각형
                bigSqure = squre3 + squre4;
                result = bigSqure * squre1 * squre2;
                if(result>max) max = result;

                //2,4 가 1개의 사각형
                bigSqure = squre2 + squre4;
                result = bigSqure * squre3 * squre1
                if(result>max) max = result;
            }
        }
    }
    console.log(max);
}
const path =process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
solution(input);