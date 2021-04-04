import { graphNodeToGridNode } from './conversions';
import { toggleClassWallNode } from './toggleClasses';


const animateWallNodesRemoval = (visited) => {
  return new Promise (
    (resolve,reject) => {
      let count = 0;
      for (let i = 0;i < 15; i++) {
        let interval = setInterval( function(){
          if(count<visited.length) {
              toggleClassWallNode(visited[count][0],visited[count][1],'remove');
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

export const animateWallNodes = (visited,startNode,destNode,clearWalls) => {
  let gridStartNode = graphNodeToGridNode(startNode);
  let gridDestNode = graphNodeToGridNode(destNode);
  return new Promise (
    (resolve,reject) => {
      let count = 0;
      for (let i = 0;i < 15; i++) {
        let interval = setInterval( function(){
          if(count<visited.length) {
            if(visited[count][0] === gridStartNode[0] && visited[count][1] === gridStartNode[1]) {

            } else if (visited[count][0] === gridDestNode[0] && visited[count][1] === gridDestNode[1]) {

            } else {
              toggleClassWallNode(visited[count][0],visited[count][1],'add');
            }
            // document.getElementById(`${visited[count][0]}+${visited[count][1]}`).classList.add('board__visited');
          }
          count++;
          if(count >= visited.length) {
            clearInterval(interval);
            animateWallNodesRemoval(clearWalls);
            resolve();
          }
        },30);
      }
    }
  );
}

export const animateVisitedNodes = (visited,startNode,destNode) => {
  let gridStartNode = graphNodeToGridNode(startNode);
  let gridDestNode = graphNodeToGridNode(destNode);
  return new Promise (
    (resolve,reject) => {
      let count = 0;
      for (let i = 0;i < 15; i++) {
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
        },50);
      }
    }
  );
}


export const animatePathNodes = (path,startNode,destNode) => {
  let gridStartNode = graphNodeToGridNode(startNode);
  let gridDestNode = graphNodeToGridNode(destNode);
  console.log(path);
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
        },30); 
      },1700);
      
    }  
  );
}
