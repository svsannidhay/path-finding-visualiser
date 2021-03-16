import { toggleClassStartNode,toggleClassDestNode} from './toggleClasses';
export const clearClasses = () => {
  for(let i = 0; i < 25; i++) {
    for(let j = 0;j < 50;j++) { 
      document.getElementById(`${i}+${j}`).classList.remove('board__startNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__destNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__wallNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__visited');
      document.getElementById(`${i}+${j}`).classList.remove('board__visited--startNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__visited--destNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__path');
    }
  }    
} 

export const newBoard = () => {
  const board = [];
  for(let i = 0; i < 25; i++) {
    let row = [];
    for(let j = 0;j < 50;j++) { 
      row.push(0);
    }
    board.push(row);
  }    
  board[5][15] = 1;
  board[5][30] = 3;
  toggleClassStartNode(5,15,'add');
  toggleClassDestNode(5,30,'add');
  return board;
}