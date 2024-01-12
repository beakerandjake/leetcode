import { removeStars } from '../src/leetcode/2390.js';

describe('2390. Removing Stars From a String', () => {
  [
    ['leet**cod*e', 'lecoe'],
    ['erase*****', ''],
    ['hello world', 'hello world'],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = removeStars(input);
      expect(result).toBe(expected);
    });
  });
});
