import { PlayerScore } from './player-score';

export class YahtzeeBoard {
  scores: PlayerScore[];
  player: string;
  dices;
  attempt: number;
}
