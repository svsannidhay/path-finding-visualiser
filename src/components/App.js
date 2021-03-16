import React from 'react';
import Board from './Board/Board';
import Navigation from './Navigation'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisualizationStarted: false,
      clearBoard: false,
      clearWalls: false
    };
  }

  onVisualizationStart = () => {
    this.setState({
      isVisualizationStarted: true
    });
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

  render () {
    return (
      <div>
        <Navigation 
        onVisualizationStart = {this.onVisualizationStart} 
        onClearBoardStart = {this.onClearBoardStart}
        onClearWallsStart = {this.onClearWallsStart}
        />
        <Board 
        isVisualizationStarted = {this.state.isVisualizationStarted} 
        onVisualizationEnd = {this.onVisualizationEnd} 
        clearBoard = {this.state.clearBoard} 
        onClearBoardEnd = {this.onClearBoardEnd}
        clearWalls = {this.state.clearWalls}
        onClearWallsEnd = {this.onClearWallsEnd}
        />
      </div>
    );
  };
};

export default App;