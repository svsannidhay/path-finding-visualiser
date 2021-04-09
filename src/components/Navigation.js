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