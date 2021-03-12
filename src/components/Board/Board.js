import React from 'react';
import Node from './Node';
import gridToGraph from '../../utilityFunctions/gridToGraph';
import { findStartNode , findDestNode } from '../../utilityFunctions/findMarkers';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      isStartNodeCreated: false,
      isDestNodeCreated: false,
      isStartNodeDragged: false,
      isDestNodeDragged: false,
      areWeBuildingWalls: false,
      isWallRemovedByStart: false,
      isWallRemovedByDest: false,
      prevRowIndex: -1,
      prevColIndex : -1
    };
  }
  //Create the board with the current state 
  createBoard = () => {
    const nodes = [];
    for (let i=0; i<25; i++) {
      const row = [];
      for (let j=0; j<50; j++) {
        row.push(0);
      }
      nodes.push(row);
    }
    for (let i=0; i<25; i++) {
      for (let j=0; j<50; j++) {
        nodes[i][j] = this.state.nodes[i][j];
      }
    }
    return nodes;
  }

  componentDidMount() {
    const board = [];
    for (let i=0; i<25; i++) {
      const row = [];
      for (let j=0; j<50; j++) {
        row.push(0);
      }
      board.push(row);
    }
    this.setState({nodes: board});
  }

  componentDidUpdate() {
    if(this.props.isVisualizationStarted) {
      let adj = gridToGraph(this.state.nodes);
      let startNode = findStartNode(this.state.nodes);
      let destNode = findDestNode(this.state.nodes);
      console.log(adj);
      console.log(startNode);
      console.log(destNode);
      // 2. Now Apply dijkstra
      // 3. Animate the return path and visited nodes
      this.props.onVisualizationEnd();
    }
  }

  toggleClassStartNode = (x,y,toggle) => {
    if(toggle === 'add')  document.getElementById(`${x}+${y}`).classList.add('board__startNode');
    if(toggle === 'remove') document.getElementById(`${x}+${y}`).classList.remove('board__startNode');
  }

  toggleClassDestNode = (x,y,toggle) => {
    if(toggle === 'add')  document.getElementById(`${x}+${y}`).classList.add('board__destNode');
    if(toggle === 'remove') document.getElementById(`${x}+${y}`).classList.remove('board__destNode');
  }

  toggleClassWallNode = (x,y,toggle) => {
    if(toggle === 'add')  document.getElementById(`${x}+${y}`).classList.add('board__wallNode');
    if(toggle === 'remove') document.getElementById(`${x}+${y}`).classList.remove('board__wallNode');
  }


  onButtonDown = (rowIndex,colIndex) => {
    // When we want to create a start Node
    if(this.state.isStartNodeCreated === false) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 1;
      this.toggleClassStartNode(rowIndex,colIndex,'add');
      this.setState({
        isStartNodeCreated: true,
        nodes: newNodes
      });
    }
    // when we want to create a destinaton node
    else if (this.state.isDestNodeCreated === false) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 3;
      this.toggleClassDestNode(rowIndex,colIndex,'add');
      this.setState({
        isDestNodeCreated: true,
        nodes: newNodes
      });
    }
    // When we want to drag start node
    else if (this.state.nodes[rowIndex][colIndex] === 1) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 0;
      this.setState({
        isStartNodeDragged: true,
        nodes: newNodes
      });
    }
    // When we want to drag destination node
    else if (this.state.nodes[rowIndex][colIndex] === 3) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 0;
      this.setState({
        isDestNodeDragged: true,
        nodes: newNodes
      });
    }
    // When we want to toggle walls  
    else {
      if(this.state.nodes[rowIndex][colIndex]!==1 && this.state.nodes[rowIndex][colIndex] !==3){
        // Build wall
        if(this.state.nodes[rowIndex][colIndex] === 0) {
          const newNodes = this.createBoard();
          newNodes[rowIndex][colIndex] = 2;
          this.toggleClassWallNode(rowIndex,colIndex,'add');
          this.setState({
            nodes: newNodes
          });
        }
        // Remove wall
        else if(this.state.nodes[rowIndex][colIndex] === 2) {
          const newNodes = this.createBoard();
          newNodes[rowIndex][colIndex] = 0;
          this.toggleClassWallNode(rowIndex,colIndex,'remove');
          this.setState({
            nodes: newNodes
          });
        }
      }
      this.setState({
        areWeBuildingWalls: true,
      });
    } 
  }

  onButtonOver = (rowIndex,colIndex) => {
    // If start Node is getting dragged make the current node start Node
    if(this.state.isStartNodeDragged === true && this.state.nodes[rowIndex][colIndex] !== 3) {
      if(this.state.nodes[rowIndex][colIndex] === 2) {
        this.toggleClassWallNode(rowIndex,colIndex,'remove');
        this.setState({
          isWallRemovedByStart: true,
        });
      }
      this.toggleClassStartNode(rowIndex,colIndex,'add');
    }
    // If destination Node is gertting dragged make the current node dest Node
    if(this.state.isDestNodeDragged === true && this.state.nodes[rowIndex][colIndex] !== 1) {
      if(this.state.nodes[rowIndex][colIndex] === 2) {
        this.toggleClassWallNode(rowIndex,colIndex,'remove');
        this.setState({
          isWallRemovedByDest: true,
        });
      }
      this.toggleClassDestNode(rowIndex,colIndex,'add');
    }
    // If we are building walls toggle the walls if its not a start or destination node
    if(this.state.areWeBuildingWalls === true && this.state.nodes[rowIndex][colIndex]!==1 && this.state.nodes[rowIndex][colIndex] !==3) {
      // Build wall
      if(this.state.nodes[rowIndex][colIndex] === 0) {
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 2;
        this.toggleClassWallNode(rowIndex,colIndex,'add');
        this.setState({
          nodes: newNodes
        });
      }
      // Remove wall
      else if(this.state.nodes[rowIndex][colIndex] === 2) {
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 0;
        this.toggleClassWallNode(rowIndex,colIndex,'remove');
        this.setState({
          nodes: newNodes
        });
      }
    } 
  }

  onButtonOut = (rowIndex,colIndex) => {
    // If start Node is getting dragged remove the start Node from here
    // Set the previous positions to this location so that inCase we can't place nodes
    // on their final position we should be able to place them on previous position
    // if the current position was wall and start is moved then make it a wall again
    if(this.state.isStartNodeDragged === true) {
      if(this.state.isWallRemovedByStart === true) {
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 2;
        this.toggleClassWallNode(rowIndex,colIndex,'add');
        this.setState({
          isWallRemovedByStart : false,
          nodes: newNodes
        });
      }
      this.toggleClassStartNode(rowIndex,colIndex,'remove');
      this.setState({
        prevRowIndex: rowIndex,
        prevColIndex: colIndex
      });
    }
    // If destination Node is getting dragged remove the destination node from here
    if(this.state.isDestNodeDragged === true) {
      if(this.state.isWallRemovedByDest === true) {
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 2;
        this.toggleClassWallNode(rowIndex,colIndex,'add');
        this.setState({
          isWallRemovedByDest: false,
          nodes: newNodes
        });
      }
      this.toggleClassDestNode(rowIndex,colIndex,'remove');
      this.setState({
        prevRowIndex: rowIndex,
        prevColIndex: colIndex
      });
    }
  }

  onButtonUp = (rowIndex,colIndex) => {
    // If start Node was getting dragged stop it and update state
    if(this.state.isStartNodeDragged === true) {
      // if user accidently place source node on destination node then place it
      // on previous valid poition rather than here.
      if(this.state.nodes[rowIndex][colIndex] === 3) {
        const newNodes = this.createBoard();
        console.log(this.state.prevRowIndex,this.state.prevColIndex);
        newNodes[this.state.prevRowIndex][this.state.prevColIndex] = 1;
        console.log(newNodes);
        this.toggleClassStartNode(rowIndex,colIndex,'remove');
        this.toggleClassStartNode(this.state.prevRowIndex,this.state.prevColIndex,'add');
        this.setState({
          isStartNodeDragged: false,
          nodes: newNodes
        });
      } else {
        // If its a wall node then first remove wall and add start there 
        if(this.state.nodes[rowIndex][colIndex] === 2) {
          this.toggleClassWallNode(rowIndex,colIndex,'remove');
        }
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 1;
        this.setState({
          isStartNodeDragged: false,
          nodes: newNodes
        }); 
      }
    }
    // If destination Node was getting dragged stop it and update state 
    if(this.state.isDestNodeDragged === true) {
      // if user accidently place destination node on start node then place it
      // on previous valid poition rather than here.
      if(this.state.nodes[rowIndex][colIndex] === 1){
        const newNodes = this.createBoard();
        newNodes[this.state.prevRowIndex][this.state.prevColIndex] = 3;
        this.toggleClassDestNode(rowIndex,colIndex,'remove');
        this.toggleClassDestNode(this.state.prevRowIndex,this.state.prevColIndex,'add');
        this.setState({
          isDestNodeDragged: false,
          nodes: newNodes
        });
      } else {
        // If its a wall node then first remove wall and add start there 
        if(this.state.nodes[rowIndex][colIndex] === 2) {
          this.toggleClassWallNode(rowIndex,colIndex,'remove');
        }  
        const newNodes = this.createBoard();
        newNodes[rowIndex][colIndex] = 3;
        this.setState({
          isDestNodeDragged: false,
          nodes: newNodes
        });
      }
    }
    // If we were building walls stop it 
    if(this.state.areWeBuildingWalls === true) {
      this.setState({
        areWeBuildingWalls: false,
      });
    }
  }

  
  
  render() {
    return (
      <div className="board">
        {
          this.state.nodes.map((row,i) => {
            return <div className = {`board__row--${i}`} key = {`${i}`}>
              { row.map((node,j) => <Node key = {`${i}+${j}`}  
              onButtonDown = {this.onButtonDown} 
              onButtonUp = {this.onButtonUp} 
              onButtonOver = {this.onButtonOver}
              onButtonOut = {this.onButtonOut}
              nodeVal = {this.state.nodes[i][j]} row = {i} col = {j}></Node>) }
            </div>
          })
        }
      </div>
    );
  }

};

export default Board;