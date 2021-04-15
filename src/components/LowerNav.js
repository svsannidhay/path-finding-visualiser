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
import logo from '../Images/logo5.png';

class LowerNav extends React.Component{
  render() {
    return (
      <div className = "lowerNav">
        <div className = "lowerNav__logo">
          <div className = "lowerNav__logo--container">
            <img src= {logo} alt="logo"/>
            <div className ="lowerNav__text">
              <h3 className ="lowerNav__heading">
                <span className="lowerNav__heading--main">Path Finding</span>
                <span className="lowerNav__heading--sub">Visulaiser</span>
              </h3>
            </div>
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

export default React.memo(LowerNav);