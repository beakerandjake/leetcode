import { heightChecker } from '../src/1051.js';
import { generateTestName } from './util.js';

describe('1051. Height Checker', () => {
  [
    [[1, 1, 4, 2, 1, 3], 3],
    [[5, 1, 2, 3, 4], 5],
    [[1, 2, 3, 4, 5], 0],
  ].forEach((args) => {
    const [heights, expected] = args;
    test(generateTestName(heightChecker, ...args), () => {
      const result = heightChecker(heights);
      expect(result).toBe(expected);
    });
  });
});
