const { start } = require("repl");

class Node {
    constructor(nodeNumber, weight) {
      this.nodeNumber = nodeNumber;
      this.weight = weight;
    }
  }
  let graph = [];
  let distanceFromStart = [];
  function solution(input){
      let[numberOfNode,...edgeImformations] = input.split("\n");
      numberOfNode =Number(numberOfNode);
      makeGraph(numberOfNode,edgeImformations);
      let result = getDiameter();
      console.log(result)
  }
  function makeGraph(numberOfNode, edgeImformations) {
    graph = Array.from({ length: numberOfNode + 1 }, () => []);
    for (element of edgeImformations) {
      let edgeImformation = element.split(" ").map(Number);
      for(let i = 1;edgeImformation[i]!=-1;i+=2){
          let start = edgeImformation[0];
          let end = edgeImformation[i];
          let weight= edgeImformation[i+1];
          graph[start].push(new Node(end, weight));
        }
    }
  }
  
  function getDiameter(){
      let start = maxDistanceNodeFrom(1);
      let end = maxDistanceNodeFrom(start);
      return distanceFromStart[end];
  }
  
  function maxDistanceNodeFrom(node) {
    let maxDistanceNode = node;
    distanceFromStart = new Array(graph.length);
    distanceFromStart[node] = 0;
    dfs(node);
    for (let i = 1; i<distanceFromStart.length; i += 1) {
      if (distanceFromStart[maxDistanceNode] < distanceFromStart[i]) {
        maxDistanceNode = i;
      }
    }
    return maxDistanceNode;
  }
  function dfs(here) {
    for (let next of graph[here]) {
      let there = next.nodeNumber;
      let weight = next.weight;
      if (distanceFromStart[there] === undefined) {
        distanceFromStart[there] = distanceFromStart[here] + weight;
        dfs(there);
      }
    }
  }
  let path = process.platform === "linux" ? "/dev/stdin" : "./input.txt"
  const input = require("fs").readFileSync(path).toString().trim();
  solution(input);
  