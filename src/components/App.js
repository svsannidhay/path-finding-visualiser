import React from 'react';
import Board from './Board/Board';
import LowerNav from './LowerNav';
import Navigation from './Navigation'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisualizationStarted: false,
      algorithm: "",
      clearBoard: false,
      clearWalls: false
    };
  }

  onVisualizationStart = () => {
    if(this.state.algorithm !== "") { 
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
    this.setState({
      clearBoard: true
    });
  }

  onClearBoardEnd = () => {
    this.setState({
      clearBoard: false
    });
  }

  onClearWallsStart = () => {
    this.setState({
      clearWalls: true
    });
    console.log('Clear Walls Initiated');
  }

  onClearWallsEnd = () => {
    this.setState({
      clearWalls: false
    });
    console.log('Clear Walls Ended');
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

  render () {
    return (
      <div>
        <Navigation 
        onVisualizationStart = {this.onVisualizationStart} 
        onClearBoardStart = {this.onClearBoardStart}
        onClearWallsStart = {this.onClearWallsStart}
        onAlgorithmSelect = {this.onAlgorithmSelect}
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
        />
      </div>
    );
  };
};

export default App;