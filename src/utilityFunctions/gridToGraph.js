import { gridNodeToGraphNode } from './conversions';

const gridToGraph = (grid) => {

  let adj = [];

  for(let i = 0;i < 1251 ; i++) {
    let row = [];
    adj.push(row);
  }

  const addEdge = (u,v) => {
    adj[v].push([u,1]);
    adj[u].push([v,1]);
  }

  for(let i = 0; i < 25; i++) {
    for(let j = 0;j < 50;j++) {
      if(i !== 24) {
        if(grid[i][j] !== 2 && grid[i+1][j] !== 2) {
          // add Edge
          let u = gridNodeToGraphNode(i,j);
          let v = gridNodeToGraphNode(i+1,j);
          addEdge(u,v);
        } 
      }
      if(j !== 49) {
        if(grid[i][j] !== 2 && grid[i][j+1] !== 2) {
          let u = gridNodeToGraphNode(i,j);
          let v = gridNodeToGraphNode(i,j+1);
          addEdge(u,v);
        }
      }
    }
  }
  return adj;
}

export default gridToGraph;
