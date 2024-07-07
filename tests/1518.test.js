import { numWaterBottles } from '../src/1518.js';
import { generateTestName } from './util.js';

describe('1518. Water Bottles', () => {
  [
    [9, 3, 13],
    [15, 4, 19],
  ].forEach((args) => {
    const [numBottles, numExchange, expected] = args;
    test(generateTestName(numWaterBottles, ...args), () => {
      const result = numWaterBottles(numBottles, numExchange);
      expect(result).toBe(expected);
    });
  });
});
