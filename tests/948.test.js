import { bagOfTokensScore } from '../src/948.js';
import { arrToStr } from './util.js';

describe('948. Bag of Tokens', () => {
  [
    [[100], 50, 0],
    [[200, 100], 150, 1],
    [[100, 200, 300, 400], 200, 2],
  ].forEach(([tokens, power, expected]) => {
    test(`${arrToStr(tokens)},${power} -> ${expected}`, () => {
      const result = bagOfTokensScore(tokens, power);
      expect(result).toBe(expected);
    });
  });
});
