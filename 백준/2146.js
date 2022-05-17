let dx = [1,-1,0,0];
let dy = [0,0,1,-1];
let board = [];
let islandNumber = 0;
let islandList = [];
function getMinimumLengthBtwTwoIsland(startIsland){
    let discovered = Array.from({length:board.length},()=>new Array(board.length));
    let queue = [];
    for(let y =0;y<board.length;y+=1){//10^4
        for(let x = 0;x<board.length;x+=1){
            if(board[y][x]===startIsland){
                discovered[y][x] = 0;                
                queue.push([y,x]);
            }
        }
    }
    while(queue.length!=0){
        let [hereY,hereX] = queue.shift();
        for(let i = 0;i<dx.length;i+=1){
            let thereY = hereY + dy[i];
            let thereX = hereX + dx[i];
            if(thereY<0||thereX<0||thereY>=board.length||thereX>=board.length) continue;//안되는 거라면
            if(discovered[thereY][thereX]===undefined){//방문한적 없는데
                 if(board[thereY][thereX]===0){//바다면
                    discovered[thereY][thereX] = discovered[hereY][hereX] + 1;//거리 증가
                    queue.push([thereY,thereX]);
                }else if(board[thereY][thereX]!=startIsland){//도착섬이면
                    let result = discovered[hereY][hereX];//return
                    return result;
                }
            }
        }
    }
}
function makeIslandDifferent(){
    for(let y= 0; y< board.length; y +=1){
        for(let x = 0; x<board.length;x+=1){
            setIsland(y,x);
        }
    }
}
function setIsland(startY,startX){
    if(board[startY][startX]!=1) return;
    else{
        let q = [[startY,startX]];
        islandNumber -= 1;
        board[startY][startX] = islandNumber;
        while(q.length!=0){//10^4
            let [hereY,hereX] = q.shift();
            for(let i = 0; i<dx.length;i+=1){//4
                let thereY = hereY + dy[i];
                let thereX = hereX + dx[i];
                if(thereY<0||thereX<0||thereY>=board.length||thereX>=board.length) continue;
                if(board[thereY][thereX]===1){
                    board[thereY][thereX] = islandNumber;
                    q.push([thereY,thereX])
                }
            }
        }
        islandList.push(islandNumber);
    }
}
function solution(input){
    let[n, ...remain] = input.split("\n");
    n = Number(n);
    for(let element of remain){
        board.push(element.split(" ").map(Number));
    }
    makeIslandDifferent();
    let result = [];
    for(let start of islandList){
        result.push(getMinimumLengthBtwTwoIsland(start));
    }
    let min = Math.min(...result);
    console.log(min);
}

let path = process.platform ==="linux" ? "dev/stdin" : "./input.txt";
input = require("fs").readFileSync(path).toString().trim();
solution(input);