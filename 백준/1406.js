
class Editor{
    constructor(string){
        this.stringArray = string.split("");
        this.cursur = this.stringArray.length;
    }
    moveLeft(){
        if(this.cursur===0) return;
        this.cursur -= 1;
    }
    moveRight(){
        if(this.cursur === this.stringArray.length) return;
        this.cursur += 1;
    }
    removeBefore(){
        if(this.cursur === 0) return;
        this.cursur -= 1;
        this.stringArray.splice(this.cursur,1)
    }
    addAfter(value){//P
        this.stringArray.splice(this.cursur,0,value);
        this.cursur += 1;

    }
    getString(){
        return this.stringArray.join("");
    }
}
function solution(input){
    let[value,N,...remain]= input.split("\n")
    let myEditor = new Editor(value.trim());
    for(element of remain){
        let [method, char] = element.split(" ").map(x=>x.trim());
        switch(method){
            case "L":
                myEditor.moveLeft();
                break;
            case "D":
                myEditor.moveRight();
                break;
            case "B":
                myEditor.removeBefore();
                break;
            case "P":
                myEditor.addAfter(char);
                break;
            default:
                break;
        }
    }
    console.log(myEditor.getString())
}
let path = process.platform === "linux"?"/dev/stdin":"./input.txt";
let input = require("fs").readFileSync(path).toString().trim();
solution(input)