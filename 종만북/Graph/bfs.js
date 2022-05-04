let graph = [];
function bfs(start) {
  //일반적인 bfs
  const discovered = new Array(graph.length).fill(bool); //방문 여부를 기록하는 배열
  const queue = []; // push와 shift 사용
  const order = []; // 정점의 방문 순서
  discovered[start] = ture;
  queue.push(start);
  while (!queue.length === 0) {
    const here = queue.shift();
    order.push(here);
    for (let i = 0; i < graph[here].length; i += 1) {
      const there = graph[here][i];
      if (!discovered[there]) {
        queue.push(there);
        discovered[there] = true;
      }
    }
  }
  return order;
}

function bfs2(start) {
  //너비우선탐색 스패닝 트리를 계산하는 bfs
  const distance = new Array(graph.length); // start 부터 i 노드까지의 거리
  const parent = new Array(graph.length); //너비우선탐색 스패닝 트리에서 i의 부모의 번호, 루트노드라면 자기 자신
  const queue = [];
  const discovered = new Array(graph.length).fill(false);
  parent[start] = start;
  distance[start] = 0;
  discovered[start] = true;
  queue.push(start);
  while (!queue.length === 0) {
    const here = queue.shift();
    for (let i = 0; i < graph.length; i += 1) {
      const there = graph[here][i];
      if (distance[there] === undefined) {
        queue.push(there);
        distance[there] = distance[here] + 1;
        parent[there] = here;
      }
    }
  }
  return parent; //너비우선탐색 스패닝 트리
}
function shortestPath(v, parent) {
  //v로부터 루트까지의 최단 경로를 출력 한다.
  const reversedPath = [v];
  while (parent[v] != v) {
    v = parent[v];
    reversedPath.push(v);
  }
  const path = reversedPath.reverse();
  return path;
}
