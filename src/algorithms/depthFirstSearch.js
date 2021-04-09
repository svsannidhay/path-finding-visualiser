/*


MIT License

Copyright (c) 2021 Sannidhay vashal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


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
  prev = [];
  visited = [];
  found = false;
  orderedVisited = [];
  for(let i = 0;i <= n ;i++) {
    prev.push(-1);
    visited.push(0);
  }
  runDfs(startNode,destNode);
  let path = RetrievePath(startNode,destNode,prev);
  return [path,orderedVisited];
}

