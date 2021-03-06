import React from 'react';
import Node from './Node';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      startNodeSelected: false,
      destNodeSelected: false,
    };
  }

  componentDidMount() {
    const nodes = [];
    for (let i=0; i<15; i++) {
      const row = [];
      for (let j=0; j<50; j++) {
        row.push(0);
      }
      nodes.push(row);
    }
    nodes[7][15] = 1;
    this.setState({nodes});
  }

  onNodeSelect = (rowIndex,colIndex) => {
    console.log(`Node selected ${rowIndex} ${colIndex}`);
    const newNodes = [];
    for(let i=0;i<15;i++) {
      const row = [];
      for(let j=0;j<50;j++) {
        row.push(this.state.nodes[i][j]);
      }
      newNodes.push(row);
    }
    
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

  render() {
    console.log(this.state.nodes);
    return (
      <div className="board">
        {
          this.state.nodes.map((row,i) => {
            return <div className = {`board__row--${i}`} key = {`${i}`}>
              { row.map((node,j) => <Node key = {`${i}+${j}`}       onNodeSelect = {this.onNodeSelect} nodeVal = {this.state.nodes[i][j]} row = {i} col = {j}></Node>) }
            </div>
          })
        }
      </div>
    );
  }

};

export default Board;