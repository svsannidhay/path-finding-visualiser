import React from 'react';

class LowerNav extends React.Component{
  render() {
    return (
      <div className = "lowerNav">
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
      </div>
    );
  }
}

export default LowerNav;