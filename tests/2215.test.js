import { findDifference } from '../src/leetcode/2215.js';
import { arrToStr } from './util.js';

describe('2215. Find the Difference of Two Arrays', () => {
  [
    [
      [1, 2, 3],
      [2, 4, 6],
      [
        [1, 3],
        [4, 6],
      ],
    ],
    [
      [1, 2, 3],
      [2, 4, 6],
      [
        [1, 3],
        [4, 6],
      ],
    ],
    [
      [1, 2, 3, 3],
      [1, 1, 2, 2],
      [[3], []],
    ],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${expected}`, () => {
      const result = findDifference(a, b);
      expect(result).toEqual(expected);
    });
  });
});
