import { maxProfit } from '../src/122.js';
import { generateTestName } from './util.js';

describe('122. Best Time to Buy and Sell Stock II', () => {
  [
    [[7, 1, 5, 3, 6, 4], 7],
    [[1, 2, 3, 4, 5], 4],
    [[7, 6, 4, 3, 1], 0],
  ].forEach((args) => {
    const [input, expected] = args;
    test(generateTestName(maxProfit, ...args), () => {
      const result = maxProfit(input);
      expect(result).toBe(expected);
    });
  });
});
