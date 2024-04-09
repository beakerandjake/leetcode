import { maxProfit } from '../src/123.js';
import { generateTestName } from './util.js';

describe('123. Best Time to Buy and Sell Stock III', () => {
  [
    [[3, 3, 5, 0, 0, 3, 1, 4], 6],
    [[1, 2, 3, 4, 5], 4],
    [[7, 6, 4, 3, 1], 0],
  ].forEach((args) => {
    const [prices, expected] = args;
    test(generateTestName(maxProfit, ...args), () => {
      const result = maxProfit(prices);
      expect(result).toBe(expected);
    });
  });
});
