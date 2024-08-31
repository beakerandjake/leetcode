import { numTrees } from '../src/96.js';
import { generateTestName } from './util.js';

describe('96. Unique Binary Search Trees', () => {
  [
    [3, 5],
    [1, 1],
  ].forEach((args) => {
    const [n, expected] = args;
    test(generateTestName(numTrees, ...args), () => {
      const result = numTrees(n);
      expect(result).toBe(expected);
    });
  });
});
