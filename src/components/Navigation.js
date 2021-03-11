import React from 'react';

class Navigation extends React.Component {
  render () {
    return (
      <div>
        <nav className="nav">
          <ul className="nav__ul">
            <li className="nav__ul--item"> <a href = "#" className="btn">Visulaize </a></li>
          </ul>
        </nav>
      </div>
    );
  }
};

export default Navigation;