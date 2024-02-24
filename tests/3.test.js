import { lengthOfLongestSubstring } from '../src/3.js';

describe('3. Longest Substring Without Repeating Characters', () => {
  [
    ['abcabcbb', 3],
    ['bbbbb', 1],
    ['pwwkew', 3],
    ['dvdf', 3],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = lengthOfLongestSubstring(input);
      expect(result).toBe(expected);
    });
  });
});
