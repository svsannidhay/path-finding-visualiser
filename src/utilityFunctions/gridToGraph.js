const gridToGraph = (grid) => {
  console.log(grid);

  let adj = [];

  for(let i = 0;i < 1251 ; i++) {
    let row = [];
    adj.push(row);
  }

  const addEdge = (u,v) => {
    adj[v].push(u);
    adj[u].push(v);
  }

  for(let i = 0; i < 25; i++) {
    for(let j = 0;j < 50;j++) {
      if(i !== 24) {
        if(grid[i][j] !== 2 && grid[i+1][j] !== 2) {
          // add Edge
          let u = (i * 50) + (j);
          let v = ((i+1) * 50) + (j);
          addEdge(u,v);
        } 
      }
      if(j !== 49) {
        if(grid[i][j] !== 2 && grid[i][j+1] !== 2) {
          let u = (i * 50) + (j);
          let v = (i * 50) + (j + 1);
          addEdge(u,v);
        }
      }
    }
  }
  return adj;
}

export default gridToGraph;
