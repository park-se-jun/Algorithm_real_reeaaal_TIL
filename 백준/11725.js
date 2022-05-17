let graph =[];
function solution(input){
    let[numberOfVertex,...edges] = input.split("\n");
    numberOfVertex = Number(numberOfVertex)
    makeGraph(numberOfVertex,edges);
    let spanningTree = makeBfsSpanningTree(1);
    let result = ""; 
    for(let i=2;i<spanningTree.length;i+=1){

        
        result += spanningTree[i]
        result+="\n"
    } 
    console.log(result)
}
function makeBfsSpanningTree(start){
    let spanningTree = new Array(graph.length);
    let q = [start];
    spanningTree[start] = start;
    while(q.length!=0){
        let here = q.shift();
        for(let there of graph[here]){
            if(spanningTree[there]===undefined){
                spanningTree[there] = here;
                q.push(there);
            }
        }
    }
    return spanningTree;
}
function makeGraph(numberOfVertex, edgeList){
    graph = Array.from({length:numberOfVertex+1},()=>[]);
    for(let element of edgeList){
        let[start,end] = element.split(" ").map(Number);
        graph[start].push(end);
        graph[end].push(start);
    }
}
let path = process.platform ==="linux" ? "/dev/stdin":"./input.txt"
const input = require("fs").readFileSync(path).toString().trim();
solution( input);