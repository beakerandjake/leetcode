import { longestIdealString } from '../src/2370.js';
import { generateTestName } from './util.js';

describe('2370. Longest Ideal Subsequence', () => {
  [
    ['acfgbd', 2, 4],
    ['abcd', 3, 4],
  ].forEach((args) => {
    const [s, k, expected] = args;
    test(generateTestName(longestIdealString, ...args), () => {
      const result = longestIdealString(s, k);
      expect(result).toBe(expected);
    });
  });
});
