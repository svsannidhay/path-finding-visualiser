import React from 'react';
import Board from './Board';
import Navigation from './Navigation'

class App extends React.Component {
  render () {
    return (
      <div>
        <Navigation/>
        <Board/>
      </div>
    );
  };
};

export default App;