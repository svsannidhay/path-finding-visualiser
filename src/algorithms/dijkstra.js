import PriorityQueue from 'js-priority-queue';

var compareNumbers = function(a, b) { 
  return a[1] - b[1]; 
};

const RetrievePath = (startNode,destNode,prev) => {

  let start = destNode;
  let path = [];
  path.push(destNode);
  while(prev[start] !== -1) {
    start = prev[start];
    path.push(start);
  }
  return path.reverse();
}

const spDijkstra = (adj,startNode,destNode,n) => {
  let pq = new PriorityQueue({ comparator: compareNumbers });
  
  let dist = [];
  let prev = [];
  for(let i = 0;i <= n ;i++) {
    dist.push(1000000000);
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

  console.log(prev);

  let path = RetrievePath(startNode,destNode,prev);
    
  return [path,orderedVisited];
}

export default spDijkstra;

