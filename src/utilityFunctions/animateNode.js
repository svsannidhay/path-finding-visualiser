import { graphNodeToGridNode } from './conversions';
export const animateVisitedNodes = (visited,startNode,destNode) => {
  let gridStartNode = graphNodeToGridNode(startNode);
  let gridDestNode = graphNodeToGridNode(destNode);
  return new Promise (
    (resolve,reject) => {
      let count = 0;
      for (let i = 0;i < 5; i++) {
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
        },30);
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
    }  
  );
}
