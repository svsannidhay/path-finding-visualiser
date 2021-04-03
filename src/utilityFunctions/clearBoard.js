import { toggleClassStartNode,toggleClassDestNode} from './toggleClasses';
import { tellCols,tellRows } from './screensize';

export const clearClasses = () => {
  for(let i = 0; i < tellRows(); i++) {
    for(let j = 0;j < tellCols();j++) { 
      document.getElementById(`${i}+${j}`).classList.remove('board__startNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__destNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__wallNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__visited');
      document.getElementById(`${i}+${j}`).classList.remove('board__visited--startNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__visited--destNode');
      document.getElementById(`${i}+${j}`).classList.remove('board__path');
      document.getElementById(`${i}+${j}`).classList.remove('board__path--right');
      document.getElementById(`${i}+${j}`).classList.remove('board__path--left');
      document.getElementById(`${i}+${j}`).classList.remove('board__path--up');
      document.getElementById(`${i}+${j}`).classList.remove('board__path--down');
    }
  }    
} 

export const newBoard = () => {
  const board = [];
  for(let i = 0; i < tellRows(); i++) {
    let row = [];
    for(let j = 0;j < tellCols();j++) { 
      row.push(0);
    }
    board.push(row);
  }    
  let x = Math.floor(tellRows()/2);
  let y = Math.floor(tellCols()/2);
  board[x][y-7] = 1;
  board[x][y+7] = 3;
  toggleClassStartNode(x,y-7,'add');
  toggleClassDestNode(x,y+7,'add');
  return board;
}