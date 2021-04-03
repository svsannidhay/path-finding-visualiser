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

