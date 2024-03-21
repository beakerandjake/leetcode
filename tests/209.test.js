import { minSubArrayLen } from '../src/209.js';
import { generateTestName } from './util.js';

describe('209. Minimum Size Subarray Sum', () => {
  [
    [7, [2, 3, 1, 2, 4, 3], 2],
    [4, [1, 4, 4], 1],
    [11, [1, 1, 1, 1, 1, 1, 1, 1], 0],
    [11, [1, 2, 3, 4, 5], 3],
  ].forEach((args) => {
    const [target, nums, expected] = args;
    test(generateTestName(minSubArrayLen, ...args), () => {
      const result = minSubArrayLen(target, nums);
      expect(result).toBe(expected);
    });
  });
});
