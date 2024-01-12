import { isSubsequence } from '../src/392.js';

describe('392. Is Subsequence', () => {
  [
    ['abc', 'ahbgdc', true],
    ['axc', 'ahbgdc', false],
    ['aec', 'abcde', false],
    ['abcde', 'abc', false],
    ['aaaaaa', 'bbaaaa', false],
  ].forEach(([s, t, expected]) => {
    test(`${s},${t} -> ${expected}`, () => {
      const result = isSubsequence(s, t);
      expect(result).toEqual(expected);
    });
  });
});
