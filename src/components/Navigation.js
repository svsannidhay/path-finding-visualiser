import React from 'react';

class Navigation extends React.Component {
  render () {
    return (
      <div>
        <nav className="nav">
          <div className="nav__dropdown">
            <a href="/#" className = "nav__dropdown--anchor btn">Algorithms <ion-icon name="caret-down-outline"></ion-icon> </a>
            <ul className = "nav__dropdown--ul" >
              <li className = "nav__dropdown--li"><a href="/#" className = "nav__dropdown--ul--item btn-dropdown"> Dijkstra </a></li>
              <li><a href="/#" className = "nav__dropdown--ul--item btn-dropdown"> Depth first Search</a></li>
            </ul>
          </div>
          <ul className="nav__ul">
            <li className="nav__ul--item"> <a onClick = { () => this.props.onVisualizationStart() } href = "/#" className="btn-solid btn-solid--animated">Visulaize </a></li>
            <li className="nav__ul--item"> <a onClick = { () => this.props.onClearBoardStart()} href = "/#" className="btn">Clear Board</a></li>
            <li className="nav__ul--item"> <a onClick = { () => this.props.onClearWallsStart() } href = "/#" className="btn">Clear Walls</a></li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Navigation;