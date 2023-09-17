import { lengthOfLastWord } from '../../src/leetcode/lengthOfLastWord_58.js';

describe('58. Length of Last Word', () => {
  [
    ['Hello World', 5],
    ['   fly me   to   the moon  ', 4],
  ].forEach(([str, expected]) => {
    test(`${str} -> ${expected}`, () => {
      const result = lengthOfLastWord(str);
      expect(result).toBe(expected);
    });
  });
});