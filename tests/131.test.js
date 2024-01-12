import { partition } from '../src/leetcode/131.js';
import { arrToStr } from './util.js';

describe('131. Palindrome Partitioning', () => {
  [
    [
      'aab',
      [
        ['a', 'a', 'b'],
        ['aa', 'b'],
      ],
    ],
    ['a', [['a']]],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${arrToStr(expected)}`, () => {
      const result = partition(input);
      expect(result).toEqual(expected);
    });
  });
});
