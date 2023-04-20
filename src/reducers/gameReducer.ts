import { PLACE_PIECE, RESET_GAME } from '../constants/actionTypes';
import { GameAction, GameState, Player, Cell } from '../types';

const initialState: GameState = {
  board: Array.from({ length: 6 }, (_, row) =>
    Array.from({ length: 7 }, (_, col) => ({
      row,
      col,
      player: null,
    }))
  ),
  currentPlayer: 'red',
  winner: null,
  isGameOver: false,
};

const getNextAvailableRow = (board: Cell[][], col: number): number | null => {
  for (let row = board.length - 1; row >= 0; row--) {
    if (board[row][col].player === null) {
      return row;
    }
  }
  return null;
};

const isBoardFull = (board: Cell[][]): boolean => {
  return board.every(row => row.every(cell => cell.player !== null));
};

const checkWinner = (board: Cell[][], row: number, col: number, currentPlayer: Player): Player | null => {
  const directions = [
    { dr: 0, dc: 1 },  // horizontal
    { dr: 1, dc: 0 },  // vertical
    { dr: 1, dc: 1 },  // diagonal top-left to bottom-right
    { dr: 1, dc: -1 }, // diagonal bottom-left to top-right
  ];

  const inBounds = (r: number, c: number): boolean => (
    r >= 0 && r < board.length && c >= 0 && c < board[0].length
  );

  for (const { dr, dc } of directions) {
    let consecutive = 0;

    for (let i = -3; i <= 3; i++) {
      const r = row + dr * i;
      const c = col + dc * i;

      if (inBounds(r, c) && board[r][c].player === currentPlayer) {
        consecutive++;
        if (consecutive === 4) {
          return currentPlayer;
        }
      } else {
        consecutive = 0;
      }
    }
  }

  return null;
};

const gameReducer = (state: GameState = initialState, action: GameAction): GameState => {
  switch (action.type) {
    case PLACE_PIECE:
      if (state.winner) {
        return state;
      }

      const { col } = action.payload;
      const newRow = getNextAvailableRow(state.board, col);

      if (newRow === null) {
        return state;
      }

      const newBoard = state.board.map(r =>
        r.map(c => {
          if (c.row === newRow && c.col === col) {
            return { ...c, player: state.currentPlayer };
          }
          return c;
        })
      );

      const winner = checkWinner(newBoard, newRow, col, state.currentPlayer);
      const isGameOver = winner !== null || isBoardFull(newBoard);

      return {
        ...state,
        board: newBoard,
        currentPlayer: state.currentPlayer === 'red' ? 'yellow' : 'red',
        winner,
        isGameOver,
      };

    case RESET_GAME:
      return initialState;

    default:
      return state;
  }
};

export default gameReducer;
