import { maxVowels } from '../../src/leetcode/1456.js';

describe('1456. Maximum Number of Vowels in a Substring of Given Length', () => {
  [
    ['abciiidef', 3, 3],
    ['aeiou', 2, 2],
    ['leetcode', 3, 2],
  ].forEach(([str, k, expected]) => {
    test(`${str},${k} -> ${expected}`, () => {
      const result = maxVowels(str, k);
      expect(result).toBe(expected);
    });
  });
});
