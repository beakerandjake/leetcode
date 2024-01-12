import { maxProfit } from '../src/121.js';
import { arrToStr } from './util.js';

describe('121. Best Time to Buy and Sell Stock', () => {
  [
    [[7, 1, 5, 3, 6, 4], 5],
    [[7, 6, 4, 3, 1], 0],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${expected}`, () => {
      const result = maxProfit(array);
      expect(result).toEqual(expected);
    });
  });
});
