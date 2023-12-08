import { maxProfit } from '../../src/leetcode/714.js';
import { arrToStr } from '../util.js';

describe('714. Best Time to Buy and Sell Stock with Transaction Fee', () => {
  [
    [[1, 3, 2, 8, 4, 9], 2, 8],
    [[1, 3, 7, 5, 10, 3], 3, 6],
  ].forEach(([prices, fee, expected]) => {
    test(`${arrToStr(prices)},${fee} -> ${expected}`, () => {
      const result = maxProfit(prices, fee);
      expect(result).toBe(expected);
    });
  });
});
