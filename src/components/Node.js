import React from 'react';

class Node extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rowIndex: this.props.row,
      colIndex: this.props.col
    }
  }
  
  render () {
    return (
      <div onClick = {() => this.props.onNodeSelect(this.props.row,this.props.col) } className="board__node">
        <div className = {`board__node--content ${this.state.rowIndex}+${this.state.colIndex} board__node--gradient-border`}></div>
      </div>
    );
  }
};

export default Node;
