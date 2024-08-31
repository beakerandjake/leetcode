import { numTrees } from '../src/96.js';
import { generateTestName } from './util.js';

describe('96. Unique Binary Search Trees', () => {
  [
    [3, 5],
    [1, 1],
    [4, 14],
    [5, 42],
    [6, 132],
    [19, 1767263190],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(numTrees, ...args), () => {
      const result = numTrees(n);
      expect(result).toBe(expected);
    });
  });
});
