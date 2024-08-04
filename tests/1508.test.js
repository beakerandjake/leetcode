import { rangeSum } from '../src/1508.js';
import { generateTestName } from './util.js';

describe('1508. Range Sum of Sorted Subarray Sums', () => {
  [
    [[1, 2, 3, 4], 4, 1, 5, 13],
    [[1, 2, 3, 4], 4, 3, 4, 6],
    [[1, 2, 3, 4], 4, 1, 10, 50],
  ].forEach((args) => {
    const [nums, n, left, right, expected] = args;
    test(generateTestName(rangeSum, ...args), () => {
      const result = rangeSum(nums, n, left, right);
      expect(result).toBe(expected);
    });
  });
});
