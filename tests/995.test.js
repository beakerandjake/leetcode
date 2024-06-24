import { minKBitFlips } from '../src/995.js';
import { generateTestName } from './util.js';

describe('995. Minimum Number of K Consecutive Bit Flips', () => {
  [
    [[0, 1, 0], 1, 2],
    [[1, 1, 0], 2, -1],
    [[0, 0, 0, 1, 0, 1, 1, 0], 3, 3],
  ].forEach((args) => {
    const [nums, k, expected] = args;
    test(generateTestName(minKBitFlips, ...args), () => {
      const result = minKBitFlips(nums, k);
      expect(result).toBe(expected);
    });
  });
});
