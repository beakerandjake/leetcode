import { findShortestSubArray } from '../src/697.js';
import { generateTestName } from './util.js';

describe('697. Degree of an Array', () => {
  [
    [[1, 2, 2, 3, 1], 2],
    [[1, 2, 2, 3, 1, 4, 2], 6],
  ].forEach((args) => {
    const [nums, expected] = args;
    test(generateTestName(findShortestSubArray, ...args), () => {
      const result = findShortestSubArray(nums);
      expect(result).toBe(expected);
    });
  });
});
