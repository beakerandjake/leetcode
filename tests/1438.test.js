import { longestSubarray } from '../src/1438.js';
import { generateTestName } from './util.js';

describe('1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit', () => {
  [
    [[8, 2, 4, 7], 4, 2],
    [[10, 1, 2, 4, 7, 2], 5, 4],
    [[4, 2, 2, 2, 4, 4, 2, 2], 0, 3],
  ].forEach((args) => {
    const [nums, limit, expected] = args;
    test(generateTestName(longestSubarray, ...args), () => {
      const result = longestSubarray(nums, limit);
      expect(result).toBe(expected);
    });
  });
});
