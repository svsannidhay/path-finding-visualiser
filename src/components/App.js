import React from 'react';
import Board from './Board/Board';
import Navigation from './Navigation'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisualizationStarted: false,
      clearBoard: false,
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
    console.log('Clear Board Initiated');
  }

  onClearBoardEnd = () => {
    this.setState({
      clearBoard: false
    });
    console.log('Clear Board Ended');
  }

  render () {
    return (
      <div>
        <Navigation onVisualizationStart = {this.onVisualizationStart} onClearBoardStart = {this.onClearBoardStart}/>
        <Board isVisualizationStarted = {this.state.isVisualizationStarted} onVisualizationEnd = {this.onVisualizationEnd} clearBoard = {this.state.clearBoard} onClearBoardEnd = {this.onClearBoardEnd}/>
      </div>
    );
  };
};

export default App;