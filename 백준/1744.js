let path = process.platform == "linux"?"/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim()
let [firstLine,...remain] = input.split("\n").map(Number);

const minusArray = remain.filter((value)=> value<=0).sort((a,b)=>a-b );
const plusArray = remain.filter((value)=> value>0).sort((a,b)=>b-a);
let result =0;
for(let i =0;i<minusArray.length;i+=1){
    if(i===minusArray.length-1){
        result += minusArray[i]
        continue;
    }else{
        result += minusArray[i]*minusArray[i+1];
        i+=1;
    }
}
for(let i =0;i<plusArray.length;i+=1){
    if(i===plusArray.length -1){
        result += plusArray[i];
        continue;
    }
    if(plusArray[i]*plusArray[i+1]>plusArray[i]+plusArray[i+1]){
        result += plusArray[i]*plusArray[i+1];
        i+=1;
    }else{
        result += plusArray[i];
    }
}
console.log(result)