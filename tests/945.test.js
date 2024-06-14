import { minIncrementForUnique } from '../src/945.js';
import { generateTestName } from './util.js';

describe('945. Minimum Increment to Make Array Unique', () => {
  [
    [[1, 2, 2], 1],
    [[3, 2, 1, 2, 1, 7], 6],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(minIncrementForUnique, ...args), () => {
      const result = minIncrementForUnique(nums);
      expect(result).toBe(expected);
    });
  });
});
