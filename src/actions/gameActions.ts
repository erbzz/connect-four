import { PLACE_PIECE, RESET_GAME } from '../constants/actionTypes';
import { GameAction } from '../types';

export const placePiece = (col: number): GameAction => {
  return {
    type: PLACE_PIECE,
    payload: {
      col,
    },
  };
};

export const resetGame = (): GameAction => {
  return {
    type: RESET_GAME,
  };
};
