import { longestPalindrome } from '../src/5.js';
import { arrToStr } from './util.js';

describe('5. Longest Palindromic Substring', () => {
  [
    ['babad', 'bab'],
    ['cbbd', 'bb'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = longestPalindrome(input);
      expect(result).toBe(expected);
    });
  });
});
