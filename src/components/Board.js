import React from 'react';
import Node from './Node';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    };
  }

  componentDidMount() {
    const nodes = [];
    for (let i=0; i<15; i++) {
      const row = [];
      for (let j=0; j<50; j++) {
        row.push([]);
      }
      nodes.push(row);
    }
    this.setState({nodes});
  }

  render() {
    console.log(this.state.nodes);
    return (
      <div className="board">
        {
          this.state.nodes.map((row,i) => {
            return <div className = {`board__row--${i}`} key = {`${i}`}>
              { row.map((node,j) => <Node key = {`${i}+${j}`} row = {i} col = {j}></Node>) }
            </div>
          })
        }
      </div>
    );
  }

};

export default Board;