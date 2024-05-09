import { largestDivisibleSubset } from '../src/368.js';
import { generateTestName } from './util.js';

describe('368. Largest Divisible Subset', () => {
  [
    [
      [1, 2, 3],
      [1, 2],
    ],
    [
      [1, 2, 4, 8],
      [1, 2, 4, 8],
    ],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(largestDivisibleSubset, ...args), () => {
      const result = largestDivisibleSubset(nums);
      expect(result).toEqual(expected);
    });
  });
});
