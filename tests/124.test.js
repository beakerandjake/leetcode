import { maxPathSum } from '../src/124.js';
import { generateTestName } from './util.js';

describe('124. Binary Tree Maximum Path Sum', () => {
  [
    [[1, 2, 3], 6],
    [[-10, 9, 20, null, null, 15, 7], 42],
  ].forEach((args) => {
    const [root, expected] = args;
    test(generateTestName(maxPathSum, ...args), () => {
      const result = maxPathSum(root);
      expect(result).toBe(expected);
    });
  });
});
