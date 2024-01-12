import { isAnagram } from '../src/leetcode/242.js';

describe('242. Valid Anagram', () => {
  [
    ['anagram', 'nagaram', true],
    ['rat', 'car', false],
  ].forEach(([s, t, expected]) => {
    test(`${s},${t}-> ${expected}`, () => {
      const result = isAnagram(s, t);
      expect(result).toBe(expected);
    });
  });
});
