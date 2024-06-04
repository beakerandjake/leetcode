import { longestPalindrome } from '../src/409.js';
import { generateTestName } from './util.js';

describe('409. Longest Palindrome', () => {
  [
    ['abccccdd', 7],
    ['a', 1],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(longestPalindrome, ...args), () => {
      const result = longestPalindrome(s);
      expect(result).toBe(expected);
    });
  });
});
