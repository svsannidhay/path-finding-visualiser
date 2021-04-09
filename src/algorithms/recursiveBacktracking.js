/*


MIT License

Copyright (c) 2021 Sannidhay vashal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


import { findStartNode,findDestNode }   from '../utilityFunctions/findMarkers';
import { graphNodeToGridNode } from '../utilityFunctions/conversions';


const recursiveBacktracker = (grid,type) => {
  let startNode = graphNodeToGridNode(findStartNode(grid));
  let destNode = graphNodeToGridNode(findDestNode(grid));

  // Base initialisations
  let count = 0;
  let visited = [];
  let animateWalls = [];
  for(let i=0;i<grid.length;i++) {
    let row = [];
    for(let j=0;j<grid[i].length;j++) {
      row.push(0);
      animateWalls.push([i,j]);
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
  // Running recursive backtracker
  while(cnt < count  && stack.length > 0) {
    let current;
    let ok = 0;
    let next = [];
    while(ok === 0 && stack.length > 0) {
      current = stack.pop();
      clearNodes.push([current[0],current[1]]);
      // checking if any path is not visited in any of the four directions
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
    // if all the possible moves are identified choose randomly which one to select
    let chooseRandom = Math.floor(Math.random() * (next.length));
    stack.push([current[0],current[1]]);
    visited[current[0]][current[1]] = 1;
    stack.push([next[chooseRandom][0],next[chooseRandom][1]]);
    visited[next[chooseRandom][0]][next[chooseRandom][1]] = 1;

    if (next[chooseRandom][0] === current[0] + 2 && next[chooseRandom][1] === current[1]) {
      clearNodes.push( [current[0] + 1,current[1]] );
      clearNodes.push( [current[0] + 2,current[1]] );
    } 
    if(next[chooseRandom][0] === current[0] - 2 && next[chooseRandom][1] === current[1]) {
      clearNodes.push( [current[0] - 1,current[1]] );
      clearNodes.push( [current[0] - 2,current[1]] );
    } 
    if(next[chooseRandom][0]=== current[0] && next[chooseRandom][1] === current[1] + 2) {
      clearNodes.push( [current[0],current[1] + 1] );
      clearNodes.push( [current[0],current[1] + 2] );
    } 
    if(next[chooseRandom][0]=== current[0] && next[chooseRandom][1] === current[1] - 2) {
      clearNodes.push( [current[0],current[1] - 1] );
      clearNodes.push( [current[0],current[1] - 2] );
    }   
  }
  // visualisation
  let clearWalls = [];
  if(type === 'recursiveBacktracker'){
    for(let i=0;i<grid.length;i++) {
      for(let j=0;j<grid[0].length;j++) {
        let found = 0;
        for(let k=0;k<clearNodes.length;k++) {
          if(clearNodes[k][0] === i && clearNodes[k][1] === j) {
            found = 1;
            break;
          }
        }
        if(found === 0) {
          if(i === startNode[0] && j === startNode[1]) continue;
          if(i === destNode[0] && j=== destNode[1]) continue;
          grid[i][j] = 2;
        }
      }
    }
    clearWalls = clearNodes;
    // animateWallNodes(animateWalls,findStartNode(grid),findDestNode(grid),clearNodes);
  } else if(type === 'reverseRecursiveBacktracker') {
    // walls will be opened and opened cells will we closed.
    for(let i=0;i<grid.length;i++) {
      for(let j=0;j<grid[0].length;j++) {
        let found = 0;
        for(let k=0;k<clearNodes.length;k++) {
          if(clearNodes[k][0] === i && clearNodes[k][1] === j) {
            found = 1;
            break;
          }
        }
        if(found === 0) {
          clearWalls.push([i,j]);
        } else {
          if(i === startNode[0] && j === startNode[1]) continue;
          if(i === destNode[0] && j=== destNode[1]) continue;
          grid[i][j] = 2;
        }
      }
    }
    // animateWallNodes(animateWalls,findStartNode(grid),findDestNode(grid),clearWalls);
  }
  return [grid,animateWalls,clearWalls];
}

export default recursiveBacktracker;