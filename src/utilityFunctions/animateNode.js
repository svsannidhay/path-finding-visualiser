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


import { graphNodeToGridNode } from './conversions';
import { toggleClassWallNode } from './toggleClasses';



// Recurive Backtracker visulaiser 
//First convert all the cells into walls then clear the ones not required

export const animateWallNodesRemoval = (visited) => {
  return new Promise (
    (resolve,reject) => {
      let count = 0;
      for (let i = 0;i < 5; i++) {
        let interval = setInterval( function(){
          if(count<visited.length) {
              toggleClassWallNode(visited[count][0],visited[count][1],'remove');
          }
          count++;
          if(count >= visited.length) {
            clearInterval(interval);
            resolve();
          }
        },20);
      }
    }
  );
}

export const animateWallNodes = async (visited,startNode,destNode,clearWalls) => {
  let gridStartNode = graphNodeToGridNode(startNode);
  let gridDestNode = graphNodeToGridNode(destNode);
  return new Promise (
    (resolve,reject) => {
      let count = 0;
      for (let i = 0;i < 5; i++) {
        let interval = setInterval( function(){
          if(count<visited.length) {
            if(visited[count][0] === gridStartNode[0] && visited[count][1] === gridStartNode[1]) {

            } else if (visited[count][0] === gridDestNode[0] && visited[count][1] === gridDestNode[1]) {

            } else {
              toggleClassWallNode(visited[count][0],visited[count][1],'add');
            }
          }
          count++;
          if(count >= visited.length) {
            clearInterval(interval);
            resolve();
          }
        },30);
      }
    }
  );
}



// Dijsktra and dfs visualiser


export const animateVisitedNodes = (visited,startNode,destNode) => {
  let gridStartNode = graphNodeToGridNode(startNode);
  let gridDestNode = graphNodeToGridNode(destNode);
  return new Promise (
    (resolve,reject) => {
      let count = 0;
      for (let i = 0;i < 30; i++) {
        let interval = setInterval( function(){
          if(count<visited.length) {
            if(visited[count][0] === gridStartNode[0] && visited[count][1] === gridStartNode[1]) {
              document.getElementById(`${visited[count][0]}+${visited[count][1]}`).classList.add('board__visited--startNode');
            } else if (visited[count][0] === gridDestNode[0] && visited[count][1] === gridDestNode[1]) {
              document.getElementById(`${visited[count][0]}+${visited[count][1]}`).classList.add('board__visited--destNode');
            } else {
              document.getElementById(`${visited[count][0]}+${visited[count][1]}`).classList.add('board__visited');
            }
          }
          count++;
          if(count >= visited.length) {
            clearInterval(interval);
            resolve();
          }
        },20);
      }
    }
  );
}


export const animatePathNodes = (path,startNode,destNode) => {
  let gridStartNode = graphNodeToGridNode(startNode);
  let gridDestNode = graphNodeToGridNode(destNode);
  return new Promise (
    (resolve,reject) => {

      setTimeout( () => {
        let count = 0;
        let interval = setInterval( function(){
          if(count<path.length) {
            if( (path[count][0] !== gridStartNode[0] || path[count][1] !== gridStartNode[1]) && (path[count][0] !== gridDestNode[0] || path[count][1] !== gridDestNode[1])) {
                document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.remove('board__visited');
                document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.add('board__path');
                if(path[count][0] === path[count + 1][0] && path[count][1] === path[count + 1][1] + 1) {
                  document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.add('board__path--left');
                }
                if(path[count][0] === path[count + 1][0] && path[count][1] === path[count + 1][1] - 1) {
                  document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.add('board__path--right');
                }
                if(path[count][0] === path[count + 1][0] + 1 && path[count][1] === path[count + 1][1]) {
                  document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.add('board__path--up');
                }
                if(path[count][0] === path[count + 1][0] - 1 && path[count][1] === path[count + 1][1]) {
                  document.getElementById(`${path[count][0]}+${path[count][1]}`).classList.add('board__path--down');
                }
              }
          }
          count++;
          if(count >= path.length) {
            clearInterval(interval);
            resolve();
          }
        },20); 
      },1200);
      
    }  
  );
}
