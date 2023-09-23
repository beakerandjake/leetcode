import { longestCommonSubsequence } from '../../src/leetcode/longestCommonSubsequence_1143.js';

describe('1143. Longest Common Subsequence', () => {
  [
    ['abcde', 'ace', 3],
    ['abc', 'abc', 3],
    ['abc', 'def', 0],
    ['bl', 'yby', 1],
    ['psnw', 'vozsh', 1],
  ].forEach(([a, b, expected]) => {
    test(`${a},${b} -> ${expected}`, () => {
      const result = longestCommonSubsequence(a, b);
      expect(result).toBe(expected);
    });
  });
});
