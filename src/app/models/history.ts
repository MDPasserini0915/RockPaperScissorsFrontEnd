import { GameOptions } from "./game-options";

export interface History {
  player1Choice: string;
  player2Choice: string;
  winner: string;
  timeStamp: Date;
}
