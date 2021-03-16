import React from 'react';

class Navigation extends React.Component {
  render () {
    return (
      <div>
        <nav className="nav">
          <ul className="nav__ul">
            <li className="nav__ul--item"> <a onClick = { () => this.props.onVisualizationStart() } href = "/#" className="btn-solid btn-solid--animated">Visulaize </a></li>
            <li className="nav__ul--item"> <a onClick = { () => this.props.onClearBoardStart()} href = "/#" className="btn">Clear Board</a></li>
            <li className="nav__ul--item"> <a href = "/#" className="btn">Clear Walls</a></li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Navigation;