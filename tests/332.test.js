import { coinChange } from '../src/332.js';
import { arrToStr } from './util.js';

describe('322. Coin Change', () => {
  [
    [[1, 2, 5], 11, 3],
    [[2], 3, -1],
    [[1], 0, 0],
    [[6, 4, 2, 3, 9], 14, 3],
    [[3, 7, 405, 436], 8839, 25],
  ].forEach(([coins, amount, expected]) => {
    test(`${arrToStr(coins)},${amount} -> ${expected}`, () => {
      const result = coinChange(coins, amount);
      expect(result).toBe(expected);
    });
  });
});
