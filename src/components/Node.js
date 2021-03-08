import React from 'react';
import OpenWithIcon from '@material-ui/icons/OpenWith';

class Node extends React.Component {
  
  render () {
    return (
      <div  
        className = "board__node"
        onMouseDown = {() => this.props.onButtonDown(this.props.row,this.props.col)}
        onMouseUp = {() => this.props.onButtonUp(this.props.row,this.props.col)}
        onMouseOver = {() => this.props.onButtonOver(this.props.row,this.props.col)}
        onMouseOut = {() => this.props.onButtonOut(this.props.row,this.props.col)}>
        <div 
        id = {`${this.props.row}+${this.props.col}`} 
        className = {
          ` board__node--front
          ${this.props.row}+${this.props.col} 
          board__node--gradient-border`
        }>
          <div className = "startNode">
            <OpenWithIcon fontSize = 'large' color = 'inherit'/>
          </div>
        </div>
      </div>
    );
  }
};

export default Node;
