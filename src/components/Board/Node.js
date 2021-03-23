import React from 'react';

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
          ${this.props.row}+${this.props.col}`
        }>
          <div className = "startNode">
            <ion-icon name="move"></ion-icon>
          </div>
          <div className = "destNode">
            <ion-icon name="location"></ion-icon>
          </div>
          <div className = "wallNode">
            
          </div>
          <div className = "visitedNode">

          </div>
          <div className = "pathNode">
            <div className = "pathNode__right">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
            <div className = "pathNode__left">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </div>
            <div className = "pathNode__down">
              <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className = "pathNode__up">
              <ion-icon name="chevron-up-outline"></ion-icon>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Node;
