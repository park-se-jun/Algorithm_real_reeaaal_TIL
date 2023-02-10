//섬이 몇개 있는가를 판단하는 문제.
//BFS
const dx =[1,-1,0,0];
const dy = [0,0,1,-1];

function solution(input){
    let[T,...remain] = input.split("\n");
    for(let i = 0; i<Number(T);i++){
        let [tastCase,...remainExceptTC]=remain;
        let [w,h,nodes] = tastCase.split(" ").map(Number);
        let map =Array.from({length:h},()=> new Array(w).fill(0));
        let discovered = Array.from({length:h},()=> new Array(w).fill(false));
        let tcNodes = remainExceptTC.splice(0,nodes);
        remain = remainExceptTC;
        for(let element of tcNodes){
            let [x,y]=element.split(" ").map(Number);
            map[y][x] =1;
        }
        console.log(map);

        function dfsAll(){

        }
        function dfs(y,x){
            let queue = [[y,x]];
            discovered[y][x] = true;
            while(queue.lengtjh){
                let [hereY,hereX] = queue.shift();
                for(let i = 0; i<dx.length;i++){
                    let nextX = hereX + dx[i];
                    let nextY = hereY + dy[i];
                    if(nextX<0||nextY<0||nextX>=w||nextY>=h) continue;
                }
            }

            
        }
    }
}

const path = process.platform==="linux"?"/dev/stdin":"./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
solution(input)