import React from 'react';
import Node from './Node';



class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      startNodeSelected: false,
      destNodeSelected: false,
      startNodeMoving: false,
      destNodeMoving: false,
      buildingWalls: false,
      prevRowIndex: -1,
      prevColIndex : -1
    };
  }

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



  onNodeSelect = (rowIndex,colIndex) => {
    console.log(`Node selected ${rowIndex} ${colIndex}`);
    const newNodes = this.createBoard();
    if(this.state.startNodeSelected===false) {
      newNodes[rowIndex][colIndex] = 1;
      document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__startNode');
      this.setState({
        startNodeSelected: true
      });
    } else if (this.state.destNodeSelected===false) {
      newNodes[rowIndex][colIndex] = 3;
      document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__destNode');
      this.setState ({
        destNodeSelected: true
      });
    } 
    // else {
    //   // If wall is already there remove it else place it there
    //   if(newNodes[rowIndex][colIndex]===2) {
    //     newNodes[rowIndex][colIndex] = 0;
    //     document.getElementById(`${rowIndex}+${colIndex}`).classList.remove('board__wallNode');
    //   } else {
    //     newNodes[rowIndex][colIndex] = 2;
    //     document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__wallNode');
    //   }
    // }
    this.setState({nodes: newNodes});
  }

  onButtonDown = (rowIndex,colIndex) => {
    console.log(`Mouse Down ${rowIndex},${colIndex}`);
    //If its a start node
    if(this.state.nodes[rowIndex][colIndex]===1) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 0;
      this.setState({
        startNodeMoving: true,
        prevRowIndex: rowIndex,
        prevColIndex: colIndex,
        nodes: newNodes
      });
    } 
    // If its a destination node
    else if(this.state.nodes[rowIndex][colIndex]===3) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 0;
      this.setState({
        destNodeMoving: true,
        prevRowIndex: rowIndex,
        prevColIndex: colIndex,
        nodes: newNodes
      });
    }
    // start building walls
    else if(this.state.startNodeSelected === true && this.state.destNodeSelected === true) { 
      this.setState({
        buildingWalls: true,
      })
    } 
  }

  onButtonOn = async (rowIndex,colIndex) => {

    //This will track the time when mouse is down but not up 
    // If startNode is moved from its position but not placed over final position
    if(this.state.startNodeMoving === true) {
      document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__startNode');
      let preR = this.state.prevRowIndex;
      let preC = this.state.prevColIndex;
      setTimeout( () => {document.getElementById(`${preR}+${preC}`).classList.remove('board__startNode')},5);
      this.setState({
        prevRowIndex: rowIndex,
        prevColIndex: colIndex
      });
    }
    // If destNode is moved from its position but not placed over final position
    if(this.state.destNodeMoving === true) {
      document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__destNode');
      let preR = this.state.prevRowIndex;
      let preC = this.state.prevColIndex;
      setTimeout( () => {document.getElementById(`${preR}+${preC}`).classList.remove('board__destNode')},5);
      this.setState({
        prevRowIndex: rowIndex,
        prevColIndex: colIndex
      });
    }
    // if we were building walls then built it here
    if(this.state.buildingWalls === true) {
      const newNodes = this.createBoard();
      // toggle the state of wall or no wall
      if(this.state.nodes[rowIndex][colIndex] === 0) {
        newNodes[rowIndex][colIndex] = 2;
        document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__wallNode');
      } else {
        newNodes[rowIndex][colIndex] = 0;
        document.getElementById(`${rowIndex}+${colIndex}`).classList.remove('board__wallNode');
      }
      this.setState({
        nodes: newNodes
      });
    }
  }

  onButtonUp = (rowIndex,colIndex) => {
    console.log(`Mouse up ${rowIndex},${colIndex}`);
    //if Start was moved then place it here
    if(this.state.nodes[rowIndex][colIndex]!==3&&this.state.startNodeMoving=== true) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 1;
      // document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__startNode');
      this.setState({
        startNodeMoving: false,
        nodes: newNodes
      });
    }
    //if destination was moved then place it here
    if(this.state.nodes[rowIndex][colIndex]!==1&&this.state.destNodeMoving=== true) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 3;
      document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__destNode');
      this.setState({
        destNodeMoving: false,
        nodes: newNodes
      });
    }
    // thats enough stop building more walls
    if(this.state.buildingWalls === true) {
      this.setState({
        buildingWalls: false
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
              onNodeSelect = {this.onNodeSelect} 
              onButtonDown = {this.onButtonDown} 
              onButtonUp = {this.onButtonUp} 
              onButtonOn = {this.onButtonOn}
              nodeVal = {this.state.nodes[i][j]} row = {i} col = {j}></Node>) }
            </div>
          })
        }
      </div>
    );
  }

};

export default Board;