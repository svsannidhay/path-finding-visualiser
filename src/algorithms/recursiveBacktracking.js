import { toggleClassWallNode } from '../utilityFunctions/toggleClasses';
import { findStartNode,findDestNode }   from '../utilityFunctions/findMarkers';
import { graphNodeToGridNode } from '../utilityFunctions/conversions';

const recursiveBacktracker = (grid) => {
  let startNode = graphNodeToGridNode(findStartNode(grid));
  let destNode = graphNodeToGridNode(findDestNode(grid));

  let count = 0;
  let visited = [];
  for(let i=0;i<grid.length;i++) {
    let row = [];
    for(let j=0;j<grid[i].length;j++) {
      row.push(0);
    }
    visited.push(row);
  }
  for(let i=1;i<grid.length;i+=2) {
    for(let j=1;j<grid[i].length;j+=2) {
      count++;
    }
  }
  let cnt = 0;
  let stack = [];
  let clearNodes = [];
  stack.push([1,1]);
  while(cnt < count  && stack.length > 0) {
    let current;
    let ok = 0;
    let next = [];
    while(ok === 0 && stack.length > 0) {
      current = stack.pop();
      // toggleClassWallNode(current[0],current[1],'add');
      clearNodes.push([current[0],current[1]]);
      if(current[0] + 2 < grid.length && visited[current[0] + 2][current[1]] === 0) {
        next.push([current[0] + 2,current[1]]);
      }
      if(current[0] - 2 >= 0 && visited[current[0] - 2][current[1]] === 0) {
        next.push([current[0] - 2,current[1]]);
      }
      if(current[1] + 2 < grid[0].length && visited[current[0]][current[1] + 2] === 0) {
        next.push([current[0],current[1] + 2]);
      }
      if(current[1] - 2 >= 0 && visited[current[0]][current[1] - 2] === 0) {
        next.push([current[0],current[1] - 2]);
      }
      if(next.length > 0) {
        ok = 1;
      }
    }
    if(next.length === 0) continue; 
    let chooseRandom = Math.floor(Math.random() * (next.length));
    stack.push([current[0],current[1]]);
    visited[current[0]][current[1]] = 1;
    stack.push([next[chooseRandom][0],next[chooseRandom][1]]);
    visited[next[chooseRandom][0]][next[chooseRandom][1]] = 1;

    if (next[chooseRandom][0] === current[0] + 2 && next[chooseRandom][1] === current[1]) {
      // toggleClassWallNode(current[0] + 1,current[1],'add');
      // toggleClassWallNode(current[0] + 2,current[1],'add');
      clearNodes.push( [current[0] + 1,current[1]] );
      clearNodes.push( [current[0] + 2,current[1]] );
    } 
    if(next[chooseRandom][0] === current[0] - 2 && next[chooseRandom][1] === current[1]) {
      // toggleClassWallNode(current[0] - 1,current[1],'add');
      // toggleClassWallNode(current[0] - 2,current[1],'add');
      clearNodes.push( [current[0] - 1,current[1]] );
      clearNodes.push( [current[0] - 2,current[1]] );
    } 
    if(next[chooseRandom][0]=== current[0] && next[chooseRandom][1] === current[1] + 2) {
      // toggleClassWallNode(current[0],current[1] + 1,'add');
      // toggleClassWallNode(current[0],current[1] + 2,'add');
      clearNodes.push( [current[0],current[1] + 1] );
      clearNodes.push( [current[0],current[1] + 2] );
    } 
    if(next[chooseRandom][0]=== current[0] && next[chooseRandom][1] === current[1] - 2) {
      // toggleClassWallNode(current[0],current[1] - 1,'add');
      // toggleClassWallNode(current[0],current[1] - 2,'add');
      clearNodes.push( [current[0],current[1] - 1] );
      clearNodes.push( [current[0],current[1] - 2] );
    }   
  }

  console.log(clearNodes);

  for(let i=0;i<grid.length;i++) {
    for(let j=0;j<grid[0].length;j++) {
      let found = 0;
      for(let k=0;k<clearNodes.length;k++) {
        if(clearNodes[k][0] === i && clearNodes[k][1] === j) {
          found = 1;
          break;
        }
      }
      console.log(i,j,found);
      if(found === 0) {
        if(i === startNode[0] && j === startNode[1]) continue;
        if(i === destNode[0] && j=== destNode[1]) continue;
        toggleClassWallNode(i,j,'add');
        grid[i][j] = 2;
      }
    }
  }
  return grid;
}

export default recursiveBacktracker;