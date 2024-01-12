import { minEatingSpeed } from '../src/875.js';
import { arrToStr } from './util.js';

describe('875. Koko Eating Bananas', () => {
  [
    [[3, 6, 7, 11], 8, 4],
    [[30, 11, 23, 4, 20], 5, 30],
    [[30, 11, 23, 4, 20], 6, 23],
  ].forEach(([piles, h, expected]) => {
    test(`${arrToStr(piles)},${h} -> ${expected}`, () => {
      const result = minEatingSpeed(piles, h);
      expect(result).toBe(expected);
    });
  });
});
