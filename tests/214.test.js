import { shortestPalindrome } from '../src/214.js';
import { generateTestName } from './util.js';

describe('214. Shortest Palindrome', () => {
  [
    ['aacecaaa', 'aaacecaaa'],
    ['abcd', 'dcbabcd'],
  ].forEach((args) => {
    const [s, expected] = args;
    test(generateTestName(shortestPalindrome, ...args), () => {
      const result = shortestPalindrome(s);
      expect(result).toBe(expected);
    });
  });
});
