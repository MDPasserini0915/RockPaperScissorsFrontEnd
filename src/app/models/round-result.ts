import { GameOptions } from "./game-options";

export interface RoundResult {
  name: string;
  playerChoice: GameOptions;
  computerChoice: GameOptions;
  winner: string;
}
