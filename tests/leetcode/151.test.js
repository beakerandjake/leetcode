import { reverseWords } from '../../src/leetcode/151.js';

describe('151. Reverse Words in a String', () => {
  [
    ['the sky is blue', 'blue is sky the'],
    ['  hello world  ', 'world hello'],
    ['a good   example', 'example good a'],
    ['                                          hello world  ', 'world hello'],
    ['hello world                               ', 'world hello'],
  ].forEach(([str, expected]) => {
    test(`${str} -> ${expected}`, () => {
      const result = reverseWords(str);
      expect(result).toBe(expected);
    });
  });
});
