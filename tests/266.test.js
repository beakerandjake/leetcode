import { canPermutePalindrome } from '../src/leetcode/266.js';

describe('266. Palindrome Permutation', () => {
  [
    ['code', false],
    ['aab', true],
    ['carerac', true],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = canPermutePalindrome(input);
      expect(result).toBe(expected);
    });
  });
});
