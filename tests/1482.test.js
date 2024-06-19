import { minDays } from '../src/1482.js';
import { generateTestName } from './util.js';

describe('1482. Minimum Number of Days to Make m Bouquets', () => {
  [
    [[1, 10, 3, 10, 2], 3, 1, 3],
    [[1, 10, 3, 10, 2], 3, 2, -1],
    [[7, 7, 7, 7, 12, 7, 7], 2, 3, 12],
  ].forEach((args) => {
    const [bloomDay, m, k, expected] = args;
    test(generateTestName(minDays, ...args), () => {
      const result = minDays(bloomDay, m, k);
      expect(result).toBe(expected);
    });
  });
});
