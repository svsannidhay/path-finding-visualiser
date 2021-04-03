import { tellCols,tellRows } from './screensize';
export const findStartNode = (grid) => {
  let startNode = -1;
  for(let i = 0;i < tellRows(); i++) {
    for(let j = 0;j < tellCols(); j++) {
      if(grid[i][j] === 1) {
        startNode = (i * tellCols()) + j;
      }
    }
  }
  return startNode;
}

export const findDestNode = (grid) => {
  let destNode = -1;
  for(let i = 0;i < tellRows(); i++) {
    for(let j = 0;j < tellCols(); j++) {
      if(grid[i][j] === 3) {
        destNode = (i * tellCols()) + j;
      }
    }
  }
  return destNode;
}