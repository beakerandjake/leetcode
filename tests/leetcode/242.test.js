import { isAnagram } from "../../src/leetcode/242.js";

describe('242. Valid Anagram', () => {
  [
    ['anagram', 'nagaram', true],
    ['rat', 'car', false],
  ].forEach(([input,expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = isAnagram(input);
      expect(result).toBe(expected)
    });
  });
});