import { maxProfit } from '../../src/leetcode/bestTimeToBuyAndSellStockIV_188.js';
import { arrToStr } from '../util.js';

describe('188. Best Time to Buy and Sell Stock IV', () => {
  [
    [[2, 4, 1], 2, 2],
    [[3, 2, 6, 5, 0, 3], 2, 7],
  ].forEach(([prices, k, expected]) => {
    test(`${arrToStr(prices)}, ${k} -> ${expected}`, () => {
      const result = maxProfit(prices, k);
      expect(result).toBe(expected);
    });
  });
});
