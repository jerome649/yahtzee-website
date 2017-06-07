import { ItemScore } from './item-score';

export class PlayerScore {
  name: string;
  ones: ItemScore;
  twos: ItemScore;
  threes: ItemScore;
  fours: ItemScore;
  fives: ItemScore;
  sixes: ItemScore;
  pair: ItemScore;
  doublePair: ItemScore;
  threeOfAKind: ItemScore;
  fourOfAKind: ItemScore;
  smallStraight: ItemScore;
  largeStraight: ItemScore;
  fullHouse: ItemScore;
  chance: ItemScore;
  yahtzee: ItemScore;
  bonus: number;
  total: number;
}
