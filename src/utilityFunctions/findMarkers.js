export const findStartNode = (grid) => {
  let startNode = -1;
  for(let i = 0;i < 25;i++) {
    for(let j = 0;j<50;j++) {
      if(grid[i][j] === 1) {
        startNode = (i * 50) + j;
      }
    }
  }
  return startNode;
}

export const findDestNode = (grid) => {
  let destNode = -1;
  for(let i = 0;i < 25;i++) {
    for(let j = 0;j<50;j++) {
      if(grid[i][j] === 3) {
        destNode = (i * 50) + j;
      }
    }
  }
  return destNode;
}