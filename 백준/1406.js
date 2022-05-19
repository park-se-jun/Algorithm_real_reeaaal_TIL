
function solution(input){
    let beforeCursur = [];
    let afterCursur = [];
    let tmpChar;
    let[value,N,...remain]= input.split("\n")
    for(let element of value.trim().split("")){
        beforeCursur.push(element);
    }
    for(element of remain){
        let [method, char] = element.split(" ").map(x=>x.trim());
        switch(method){
            case "L":
                tmpChar = beforeCursur.pop();
                if(tmpChar === undefined){
                    break;
                }
                afterCursur.push(tmpChar);
                tmpChar = null;
                break;
            case "D":
                tmpChar = afterCursur.pop();
                if(tmpChar === undefined){
                    break;
                }
                beforeCursur.push(tmpChar);
                tmpChar = null;
                break;
            case "B":
                beforeCursur.pop();
                break;
            case "P":
                beforeCursur.push(char);
                break;
            default:
                break;
        }
    }
    while(afterCursur.length!=0){
        tmpChar=afterCursur.pop();
        beforeCursur.push(tmpChar);
    }
    console.log(beforeCursur.join(""));
}
let path = process.platform === "linux"?"/dev/stdin":"./input.txt";
let input = require("fs").readFileSync(path).toString().trim();
solution(input)