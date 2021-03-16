export const clearWalls = (nodes) => {
  for(let i = 0; i < 25; i++) {
    for(let j = 0;j < 50;j++) { 
      document.getElementById(`${i}+${j}`).classList.remove('board__wallNode');
      if(nodes[i][j] === 2) {
        nodes[i][j] = 0;
      }
    }
  }  
  return nodes;
} 

