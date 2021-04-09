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
      alert("Abe algorithm toh select kr");
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
    if(this.state.navigationOff == false) {
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