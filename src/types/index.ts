export type Player = 'red' | 'yellow';

export interface Cell {
  row: number;
  col: number;
  player: Player | null;
}

export interface GameState {
  board: Cell[][];
  currentPlayer: Player;
  winner: Player | null;
  isGameOver: boolean;
}

export interface GameAction {
  type: string;
  payload?: any;
}
