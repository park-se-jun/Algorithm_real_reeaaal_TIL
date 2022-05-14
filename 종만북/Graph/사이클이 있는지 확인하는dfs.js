//dfs를 따라 유향 그래프를 탐색했을때 사용하는 간선들만을 이용해 그래프를 구성할 경우 트리가 생긴다
/**  => dfs 스패닝 트리
 *      dfs 스패닝 트리를 생성하면 모든 그래프 내에 간선을 아래의 4개중 1개로 분류할 수 있다.
 *      - 트리간선  => 트리에 존재하는 모든 간선을 의미한다. (스패닝 트리를 이루는 간선들)
 *      - 순방향 간선 => 부모 노드에서 자식 노드로 향하는 간선을 의미한다.
 *      - 역방향 간선 => 자식 노드에서 부모 노드로 향하는 간선을 의미한다. 
 *      - 교차 간선 => 위 3가지 분류를 제외한 나머지 간선들을 의미한다.
 *  사이클의 갯수는 dfs 스패닝 트리의 역방향 간선 갯수와 동치를 이룬다 ( 역방향 간선이 있어야 사이클이 생기기 때문 )
 *  따라서 이 성질을 활용하면 그래프에 사이클이 있는지 여부를 손쉽게 파악할 수 있다.
 * 
 *  이를 구현하기 위해서는 우리가 처음에 배운 dfs 만으로는 부족하다.
 * 
 */

let graph;
let discovered;// 해당 노드가 몇번째로 발견되었는지를 기록하는 배열
let finished;//해당 노드를 방문하는 dfs가 종료되었는지 여부를 기록하는 배열
let counter ;//지금까지발견한 정점의 수
function dfs2(here){
    discovered[here] = counter++;
    for(let there of graph[here]){
        if(discovered[there]=== -1){ // 방문하지 않았다면
            dfs2(there);
        }else if(discovered[here]<discovered[there]){//there이 here보다 나중에 발견됬다면
            console.log("순방향 간선임")
        }else if(!finished[there]){//there이 here보다 먼저 발견됬지만 dfs(there) 이 아직 안 끝났음
            console.log("역방향 간선임. 이거 갯수가 사이클 갯수");
        }else
            console.log("교차간선임")
    }
    finished[here] = true;
}