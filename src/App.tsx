import React from 'react';
import './styles.css';
import Board from './components/Board';
import GameInfo from './components/GameInfo';

function App() {
  return (
    <div className="App">
      <h1>Connect 4</h1>
      <Board />
      <GameInfo />
    </div>
  );
}

export default App;
