import { wordPattern } from '../../src/leetcode/290.js';

describe('290. Word Pattern', () => {
  [
    ['abba', 'dog cat cat dog', true],
    ['abba', 'dog cat cat fish', false],
    ['aaaa', 'dog cat cat dog', false],
  ].forEach(([pattern, s, expected]) => {
    test(`${pattern},${s} -> ${expected}`, () => {
      const result = wordPattern(pattern, s);
      expect(result).toBe(expected);
    });
  });
});
