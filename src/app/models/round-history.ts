import { GameOptions } from "./game-options"

export interface RoundHistory {
  id: number;
  player1Choice: GameOptions;
  player2Choice: GameOptions;
  winner: string;
  timeStamp: Date;
}
