import { isPalindrome } from '../src/leetcode/125.js';

describe('125. Valid Palindrome', () => {
  [
    ['A man, a plan, a canal: Panama', true],
    ['race a car', false],
    [' ', true],
    ['aa', true],
    ['ab_a', true],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPalindrome(input);
      expect(result).toBe(expected);
    });
  });
});
