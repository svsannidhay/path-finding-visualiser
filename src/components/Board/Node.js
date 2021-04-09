/*


MIT License

Copyright (c) 2021 Sannidhay vashal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


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
