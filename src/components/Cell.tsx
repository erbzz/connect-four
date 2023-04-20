import React from 'react';
import { Cell as CellType } from '../types';
import { useDispatch } from 'react-redux';
import { placePiece } from '../actions/gameActions';

interface Props {
  cell: CellType;
}

const Cell: React.FC<Props> = ({ cell }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (cell.player === null) {
      dispatch(placePiece(cell.col));
    }
  };

  return (
    <div className="cell" onClick={handleClick}>
      {cell.player == null && <div className="cell-background"></div>}
      {cell.player !== null && <div className={`player${cell.player}`}></div>}
    </div>
  );
};

export default Cell;
