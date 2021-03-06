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
      destNodeMoving: false
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
    } else if (newNodes[rowIndex][colIndex]!==1&&newNodes[rowIndex][colIndex]!==3) {
      newNodes[rowIndex][colIndex] = 2;
      document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__wallNode');
    }
    this.setState({nodes: newNodes});
  }

  onButtonDown = (rowIndex,colIndex) => {
    console.log(`${rowIndex},${colIndex}`);
    //If its a start node
    if(this.state.nodes[rowIndex][colIndex]===1) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 0;
      document.getElementById(`${rowIndex}+${colIndex}`).classList.remove('board__startNode');
      this.setState({
        startNodeMoving: true,
        nodes: newNodes
      });
    } 
    // If its a destination node
    if(this.state.nodes[rowIndex][colIndex]===3) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 0;
      document.getElementById(`${rowIndex}+${colIndex}`).classList.remove('board__destNode');
      this.setState({
        destNodeMoving: true,
        nodes: newNodes
      });
    }
  }

  onButtonUp = (rowIndex,colIndex) => {
    console.log(`${rowIndex},${colIndex}`);
    //if Start was moved then place it here
    if(this.state.nodes[rowIndex][colIndex]!==3&&this.state.startNodeMoving=== true) {
      const newNodes = this.createBoard();
      newNodes[rowIndex][colIndex] = 1;
      document.getElementById(`${rowIndex}+${colIndex}`).classList.add('board__startNode');
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
  } 

  render() {
    console.log(this.state.nodes);
    return (
      <div className="board">
        {
          this.state.nodes.map((row,i) => {
            return <div className = {`board__row--${i}`} key = {`${i}`}>
              { row.map((node,j) => <Node key = {`${i}+${j}`}  onNodeSelect = {this.onNodeSelect} onButtonDown = {this.onButtonDown} onButtonUp = {this.onButtonUp} nodeVal = {this.state.nodes[i][j]} row = {i} col = {j}></Node>) }
            </div>
          })
        }
      </div>
    );
  }

};

export default Board;