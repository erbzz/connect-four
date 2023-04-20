import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import { resetGame } from '../actions/gameActions';
import { useDispatch } from 'react-redux';

const GameInfo: React.FC = () => {
  const { currentPlayer, winner, isGameOver } = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetGame());
  };

  return (
    <div className="game-info">
      {winner && <h2>Winner: {winner}</h2>}
      {isGameOver && !winner && <h2>It's a draw!</h2>}
      {!isGameOver && <h2>Current Player: {currentPlayer}</h2>}
      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
};

export default GameInfo;
