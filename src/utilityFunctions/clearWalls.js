import { tellCols,tellRows } from './screensize';
export const clearWalls = (nodes) => {
  for(let i = 0; i < tellRows(); i++) {
    for(let j = 0;j < tellCols();j++) { 
      document.getElementById(`${i}+${j}`).classList.remove('board__wallNode');
      if(nodes[i][j] === 2) {
        nodes[i][j] = 0;
      }
    }
  }  
  return nodes;
} 

