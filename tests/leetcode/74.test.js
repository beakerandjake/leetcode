import { searchMatrix } from '../../src/leetcode/74.js';
import { arrToStr } from '../util.js';

describe('74. Search a 2D Matrix', () => {
  [
    // [
    //   [
    //     [1, 3, 5, 7],
    //     [10, 11, 16, 20],
    //     [23, 30, 34, 60],
    //   ],
    //   3,
    //   true,
    // ],
    // [
    //   [
    //     [1, 3, 5, 7],
    //     [10, 11, 16, 20],
    //     [23, 30, 34, 60],
    //   ],
    //   13,
    //   false,
    // ],
    [[[1]], 0, false],
    [
      [
        [1, 3, 5, 7],
        [10, 11, 16, 20],
        [23, 30, 34, 60],
      ],
      3,
      true,
    ],
  ].forEach(([input, target, expected]) => {
    test(`${arrToStr(input)},${target} -> ${expected}`, () => {
      const result = searchMatrix(input, target);
      expect(result).toBe(expected);
    });
  });
});
