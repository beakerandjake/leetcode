import { findMaximizedCapital } from '../src/502.js';
import { generateTestName } from './util.js';

describe('502. IPO', () => {
  [
    [2, 0, [1, 2, 3], [0, 1, 1], 4],
    [3, 0, [1, 2, 3], [0, 1, 2], 6],
    [1, 0, [1, 2, 3], [1, 1, 2], 0],
  ].forEach((args) => {
    const [k, w, profits, capital, expected] = args;
    test(generateTestName(findMaximizedCapital, ...args), () => {
      const result = findMaximizedCapital(k, w, profits, capital);
      expect(result).toBe(expected);
    });
  });
});
