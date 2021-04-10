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
import Board from './Board/Board';
import LowerNav from './LowerNav';
import Navigation from './Navigation';
import Footer from './Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisualizationStarted: false,
      mazeAlgorithm: "",
      algorithm: "",
      clearBoard: false,
      clearWalls: false,
      navigationOff: false,
    };
  }

  onVisualizationStart = () => {
    if(this.state.algorithm !== "" && this.state.navigationOff === false) { 
      this.setState({
        isVisualizationStarted: true
      });
    } else {
      alert("Please select one of the path finding algorithms");
    }
  }
  onVisualizationEnd = () => {
    this.setState({
      isVisualizationStarted: false 
    });
  }

  onClearBoardStart = () => {
    if(this.state.navigationOff === false) {
      this.setState({
        clearBoard: true
      });
    }  
  }

  onClearBoardEnd = () => {
    this.setState({
      clearBoard: false
    });
  }

  onClearWallsStart = () => {
    if(this.state.navigationOff === false) {
      this.setState({
        clearWalls: true
      });
    }
  }

  onClearWallsEnd = () => {
    this.setState({
      clearWalls: false
    });
  }

  onAlgorithmSelect = (name) => {
    this.setState({
      algorithm: name
    });
  }

  onAlgorithmDeSelect = () => {
    this.setState({
      algorithm: ""
    });
  }

  onMazeAlgorithmSelect = (name) => {
    if(this.state.navigationOff === false) {
      this.setState({
        mazeAlgorithm: name
      });
    }
  }

  onMazeAlgorithmDeSelect = () => {
    this.setState({
      mazeAlgorithm: ""
    });
  }

  deactivateButtons = () => {
    this.setState({
      navigationOff: true
    });
  }

  activateButtons = () => {
    this.setState({
      navigationOff: false
    });
  }

  render () {
    return (
      <div>
        <Navigation 
        onVisualizationStart = {this.onVisualizationStart} 
        onClearBoardStart = {this.onClearBoardStart}
        onClearWallsStart = {this.onClearWallsStart}
        onAlgorithmSelect = {this.onAlgorithmSelect}
        onMazeAlgorithmSelect = {this.onMazeAlgorithmSelect}
        navigationOff = {this.state.navigationOff}
        />
        <LowerNav></LowerNav>
        <Board 
        isVisualizationStarted = {this.state.isVisualizationStarted} 
        onVisualizationEnd = {this.onVisualizationEnd} 
        clearBoard = {this.state.clearBoard} 
        onClearBoardEnd = {this.onClearBoardEnd}
        clearWalls = {this.state.clearWalls}
        onClearWallsEnd = {this.onClearWallsEnd}
        algorithm = {this.state.algorithm}
        onAlgorithmDeSelect = {this.onAlgorithmDeSelect}
        mazeAlgorithm = {this.state.mazeAlgorithm} 
        onMazeAlgorithmDeSelect = {this.onMazeAlgorithmDeSelect}
        deactivateButtons = {this.deactivateButtons}
        activateButtons = {this.activateButtons}
        />
        <Footer></Footer>
      </div>
    );
  };
};

export default App;