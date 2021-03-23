import RetrievePath from '../utilityFunctions/retrievePath';
var adj;
var prev = [];
var visited = [];
var found = false;
let orderedVisited = [];

const runDfs = (startNode,destNode) => {
  let stack = [];
  stack.push(startNode);
  while(stack.length !== 0) {
    let current = stack[stack.length - 1];
    stack.pop();
    orderedVisited.push(current);
    if(current === destNode) {
      found = true;
      break;
    }
    if(visited[current] !== 1 && found === false) {
      visited[current] = 1;
      for(let i = 0;i < adj[current].length;i++) {
        if(visited[adj[current][i][0]] !== 1 ) {
          prev[adj[current][i][0]] = current;
          stack.push(adj[current][i][0]);
        }
      }
    }
  }
}

export const depthFirstSearch = (adjList,startNode,destNode,n) => {
  adj = adjList;
  for(let i = 0;i <= n ;i++) {
    prev.push(-1);
    visited.push(0);
  }
  runDfs(startNode,destNode);
  let path = RetrievePath(startNode,destNode,prev);
  return [path,orderedVisited];
}

