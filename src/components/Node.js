import React from 'react';


class Node extends React.Component {
  
  render () {
    return (
      <div className="board__node">
        <div 
        onMouseDown = {() => this.props.onButtonDown(this.props.row,this.props.col)}
        onMouseUp = {() => this.props.onButtonUp(this.props.row,this.props.col)}
        onMouseOver = {() => this.props.onButtonOver(this.props.row,this.props.col)}
        onMouseOut = {() => this.props.onButtonOut(this.props.row,this.props.col)}
        id = {`${this.props.row}+${this.props.col}`} 
        className = {
          `board__node--content 
          ${this.props.row}+${this.props.col} 
          board__node--gradient-border`
        }>
        </div>
      </div>  
    );
  }
};

export default Node;
