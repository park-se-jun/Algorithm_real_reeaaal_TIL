class Deque {
  constructor() {
    this.queue = [];
  }
  push_front(value) {
    this.queue.unshift(value);
  }
  push_back(value) {
    this.queue.push(value);
  }
  pop_front() {
    if (this.queue.length === 0) {
      return -1;
    } else {
      return this.queue.shift();
    }
  }
  pop_back() {
    if (this.queue.length === 0) {
      return -1;
    } else {
      return this.queue.pop();
    }
  }
  size() {
    return this.queue.length;
  }
  empty() {
    if (this.queue.length === 0) {
      return 1;
    } else return 0;
  }
  front() {
    if (this.size() === 0) return -1;
    return this.queue[0];
  }
  back() {
    if (this.size() === 0) return -1;
    return this.queue[this.size() - 1];
  }
}
function solution(input) {
  let result = "";
  let myqueue = new Deque();
  [N, ...remain] = input.split("\n");
  for (let element of remain) {
    let [method, number] = element.split(" ").map((x) => x.trim());
    switch (method) {
      case "push_front":
        myqueue.push_front(number);
        break;
      case "push_back":
        myqueue.push_back(number);
        break;
      case "pop_front":
        result += myqueue.pop_front();
        result += "\n";
        break;
      case "pop_back":
        result += myqueue.pop_back();
        result += "\n";
        break;
      case "size":
        result += myqueue.size();
        result += "\n";
        break;
      case "empty":
        result += myqueue.empty();
        result += "\n";
        break;
      case "front":
        result += myqueue.front();
        result += "\n";
        break;
      case "back":
        result += myqueue.back();
        result += "\n";
        break;
      default:
        break;
    }
  }
  console.log(result);
}
const path = process.platform === "linux" ? "/dev/tedin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
solution(input);
