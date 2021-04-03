import React from 'react';
import logo from '../Images/logo5.png';

class LowerNav extends React.Component{
  render() {
    return (
      <div className = "lowerNav">
        <div className = "lowerNav__logo">
          <img src= {logo} alt="logo"/>
          <div className ="lowerNav__text">
            <h3 className ="lowerNav__heading">
              <span className="lowerNav__heading--main">Path Finding</span>
              <span className="lowerNav__heading--sub">Visulaiser</span>
            </h3>
          </div>
        </div>
        <div className = "lowerNav__item">
          <div className = "lowerNav__item--icon-startNode">
            <ion-icon name="move"></ion-icon>  
          </div>
          <div className = "lowerNav__item--text">
            Start Node
          </div>
        </div>
        <div className = "lowerNav__item">
          <div className = "lowerNav__item--icon-destNode">
            <ion-icon name="location"></ion-icon>
          </div>
          <div className = "lowerNav__item--text">
            Destination Node
          </div>
        </div>
        <div className = "lowerNav__item">
          <div className = "lowerNav__item--node-wall">

          </div>
          <div className = "lowerNav__item--text">
            Wall Node
          </div>
        </div>
        <div className = "lowerNav__item">
          <div className = "lowerNav__item--node-visited">

          </div>
          <div className = "lowerNav__item--text">
            Visited Node
          </div>
        </div>

        <div className = "lowerNav__item">
          <div className = "lowerNav__item--node-path">

          </div>
          <div className = "lowerNav__item--text">
            Path Node
          </div>
        </div>
        <div className = "lowerNav__item">
          <div className = "lowerNav__item--node-current">
            <div className = "lowerNav__item--node-current-inner">
            </div>
          </div>
          <div className = "lowerNav__item--text">
            Currently visited
          </div>
        </div>
      </div>
    );
  }
}

export default LowerNav;