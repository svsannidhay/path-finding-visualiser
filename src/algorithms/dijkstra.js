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


import PriorityQueue from 'js-priority-queue';
import RetrievePath from '../utilityFunctions/retrievePath';

var compareNumbers = function(a, b) { 
  return a[1] - b[1]; 
};

const spDijkstra = (adj,startNode,destNode,n) => {
  let pq = new PriorityQueue({ comparator: compareNumbers });
  
  let dist = [];
  let prev = [];
  for(let i = 0;i <= n ;i++) {
    dist.push(100000);
    prev.push(-1);
  }
  
  dist[startNode] = 0;
  pq.queue([startNode,dist[startNode]]);
  
  let orderedVisited = [startNode];

  while(pq.length > 0) {
    let current = pq.dequeue();
    let distcurr = current[1];
    let v = current[0];
    if(distcurr > dist[v]) continue;
    if(distcurr >= dist[destNode]) continue;
    for(let i=0;i<adj[v].length;i++) {
      let node = adj[v][i];
      let index = node[0];
      let distnext = node[1];
      orderedVisited.push(index);
      if(dist[index] > distcurr + distnext) {
        prev[index] = v;
        dist[index] = distcurr + distnext;
        pq.queue([index,dist[index]]);
      }
    }
  }

  let path = RetrievePath(startNode,destNode,prev);
    
  return [path,orderedVisited];
}

export default spDijkstra;

