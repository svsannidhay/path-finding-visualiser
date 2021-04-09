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


class Navigation extends React.Component {
  componentDidUpdate() {
    if(this.props.navigationOff === true) {
      document.getElementById('mazes').classList.add('btn-faint');
      document.getElementById('clearBoard').classList.add('btn-faint');
      document.getElementById('clearWalls').classList.add('btn-faint');
    } else {
      document.getElementById('mazes').classList.remove('btn-faint');
      document.getElementById('clearBoard').classList.remove('btn-faint');
      document.getElementById('clearWalls').classList.remove('btn-faint');
    }
  }
  render () {
    return (
      <div>
        <nav className="nav">
          <div className="nav__dropdown">
            <a href="/#" className = "nav__dropdown--anchor btn">Algorithms <ion-icon name="caret-down-outline"></ion-icon> </a>
            <ul className = "nav__dropdown--ul" >
              <li className = "nav__dropdown--li"><a onClick = { () => this.props.onAlgorithmSelect('dijkstra') }href="/#" className = "nav__dropdown--ul--item btn-dropdown"> Dijkstra </a></li>
              <li><a onClick = { () => this.props.onAlgorithmSelect('dfs') } href="/#" className = "nav__dropdown--ul--item btn-dropdown"> Depth first Search</a></li>
            </ul>
          </div>
          <div className="nav__dropdown">
            <a href="/#" id = "mazes" className = "nav__dropdown--anchor btn">Mazes <ion-icon name="caret-down-outline"></ion-icon> </a>
            <ul className = "nav__dropdown--ul" >
              <li className = "nav__dropdown--li"><a onClick = { () => this.props.onMazeAlgorithmSelect('recursiveBacktracker') }href="/#" className = "nav__dropdown--ul--item btn-dropdown">Recursive Backtracker </a></li>
              <li className = "nav__dropdown--li"><a onClick = { () => this.props.onMazeAlgorithmSelect('reverseRecursiveBacktracker') }href="/#" className = "nav__dropdown--ul--item btn-dropdown">Reverse Recursive Backtracker </a></li>
            </ul>
          </div>
          <ul className="nav__ul">
            <li className="nav__ul--item"> <a onClick = { () => this.props.onVisualizationStart() } href = "/#" className="btn-solid btn-solid--animated">Visualise </a></li>
            <li className="nav__ul--item"> <a onClick = { () => this.props.onClearBoardStart()} href = "/#"  id = "clearBoard" className="btn">Clear Board</a></li>
            <li className="nav__ul--item"> <a onClick = { () => this.props.onClearWallsStart() } href = "/#" id = "clearWalls"  className="btn">Clear Walls</a></li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Navigation;