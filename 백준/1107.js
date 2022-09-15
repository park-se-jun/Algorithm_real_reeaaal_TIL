//리모컨 +,-. 0~9
const startNumber = 100;
/**
 * 
 * @param {number} target 
 * @param {Array<string>} bannedArray 
 */
function haveBannedNumber(target,bannedArray){
    let haveBanned = false;
    for(let i = 0;i<bannedArray.length;i++){
        if(target.toString().includes(bannedArray[i])){
            haveBanned = true;
            break;
        }
    }
    return haveBanned;
}
function solution(input){
    let[target,length,banned] = input.split("\n");
    target = Number(target);
    
    banned=(typeof banned ==="undefined" ? []: banned.split(" "));
    let answerFromStart = Math.abs(startNumber-target);
    let answerFromTargetMinus = 0;
    let answerFromTargetPlus = 0;
    for(let i = 0; ;i++){
        let numberLength =(target-i).toString().length
        if(!haveBannedNumber(target-i,banned)){
            answerFromTargetMinus = i + (target-i).toString().length;
            break;
        }else if(i + numberLength>answerFromStart){
            answerFromTargetMinus = Infinity;
            break;
        }
    }
    for(let i = 0; ; i++){
        let numberLength = (target+i).toString().length;
        if(!haveBannedNumber(target+i,banned)){
            answerFromTargetPlus = i + (target+i).toString().length;
            break;
        }else if(i + numberLength>answerFromStart){
            answerFromTargetPlus = Infinity;
            break;
        }
    }
    console.log(Math.min(answerFromStart,answerFromTargetMinus,answerFromTargetPlus));
}

const path = process.platform == "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
solution(input);
