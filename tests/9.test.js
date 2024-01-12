import { isPalindrome } from '../src/leetcode/9.js';

describe('9. Palindrome Number', () => {
  [
    [121, true],
    [-121, false],
    [10, false],
    [9, true],
    [666, true],
    [1009001, true],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isPalindrome(input);
      expect(result).toBe(expected);
    });
  });
});
