import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GameState } from '../types';
import { resetGame } from '../actions/gameActions';
import Board from './Board';

const Game: React.FC = () => {
  const dispatch = useDispatch();
  const currentPlayer = useSelector((state: { game: GameState }) => state.game.currentPlayer);
  const winner = useSelector((state: { game: GameState }) => state.game.winner);
  const isGameOver = useSelector((state: { game: GameState }) => state.game.isGameOver);

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game">
      <h1>Connect 4</h1>
      <Board />
      <div className="game-info">
        {isGameOver ? (
          <p>{winner ? `Winner: ${winner}` : 'It is a draw!'}</p>
        ) : (
          <p>Current Player: {currentPlayer}</p>
        )}
        <button onClick={handleReset}>Reset Game</button>
      </div>
    </div>
  );
};

export default Game;
