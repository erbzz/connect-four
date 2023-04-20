import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import Cell from './Cell';

const Board: React.FC = () => {
  const board = useSelector((state: RootState) => state.game.board);

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} cell={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
