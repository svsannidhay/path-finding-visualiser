import { gridNodeToGraphNode } from './conversions';
import { tellCols,tellRows } from './screensize';


const gridToGraph = (grid) => {

  let adj = [];

  for(let i = 0;i < tellCols() * tellRows() ; i++) {
    let row = [];
    adj.push(row);
  }

  const addEdge = (u,v) => {
    adj[v].push([u,1]);
    adj[u].push([v,1]);
  }

  for(let i = 0; i < tellRows(); i++) {
    for(let j = 0;j < tellCols();j++) {
      if(i !== tellRows() -1 ) {
        if(grid[i][j] !== 2 && grid[i+1][j] !== 2) {
          // add Edge
          let u = gridNodeToGraphNode(i,j);
          let v = gridNodeToGraphNode(i+1,j);
          addEdge(u,v);
        } 
      }
      if(j !== tellCols() - 1) {
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
