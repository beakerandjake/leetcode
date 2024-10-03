import { minSubarray } from '../src/1590.js';
import { generateTestName } from './util.js';

describe('1590. Make Sum Divisible by P', () => {
  [
    [[3, 1, 4, 2], 6, 1],
    [[6, 3, 5, 2], 9, 2],
    [[1, 2, 3], 3, 0],
  ].forEach((args) => {
    const [nums, p, expected] = args;
    test(generateTestName(minSubarray, ...args), () => {
      const result = minSubarray(nums, p);
      expect(result).toBe(expected);
    });
  });
});
