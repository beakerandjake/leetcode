import { longestCommonPrefix } from '../src/3043.js';
import { generateTestName } from './util.js';

describe('3043. Find the Length of the Longest Common Prefix', () => {
  [
    [[1, 10, 100], [1000], 3],
    [[1, 2, 3], [4, 4, 4], 0],
  ].forEach((args) => {
    const [arr1, arr2, expected] = args;
    test(generateTestName(longestCommonPrefix, ...args), () => {
      const result = longestCommonPrefix(arr1, arr2);
      expect(result).toBe(expected);
    });
  });
});
