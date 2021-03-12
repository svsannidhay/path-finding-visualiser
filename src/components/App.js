import React from 'react';
import Board from './Board';
import Navigation from './Navigation'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVisualizationStarted: false
    };
  }

  onVisualizationStart = () => {
    this.setState({
      isVisualizationStarted: true
    });
    console.log('visualization started');
  }

  onVisualizationEnd = () => {
    this.setState({
      isVisualizationStarted: false 
    });
    console.log('visualization ended');
  }

  render () {
    return (
      <div>
        <Navigation onVisualizationStart = {this.onVisualizationStart}/>
        <Board isVisualizationStarted = {this.state.isVisualizationStarted} onVisualizationEnd = {this.onVisualizationEnd}/>
      </div>
    );
  };
};

export default App;