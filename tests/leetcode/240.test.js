import { searchMatrix } from '../../src/leetcode/240.js';
import { arrToStr } from '../util.js';

describe('240. Search a 2D Matrix II', () => {
  [
    [
      [
        [1, 4, 7, 11, 15],
        [2, 5, 8, 12, 19],
        [3, 6, 9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30],
      ],
      5,
      true,
    ],
    // [
    //   [
    //     [1, 4, 7, 11, 15],
    //     [2, 5, 8, 12, 19],
    //     [3, 6, 9, 16, 22],
    //     [10, 13, 14, 17, 24],
    //     [18, 21, 23, 26, 30],
    //   ],
    //   20,
    //   false,
    // ],
    // [[], 1, false],
    // [
    //   [
    //     [1, 2, 3],
    //     [4, 5, 6],
    //     [7, 8, 9],
    //   ],
    //   5,
    //   true,
    // ],
  ].forEach(([matrix, target, expected]) => {
    test(`${matrix},${target},  -> ${expected}`, () => {
      const result = searchMatrix(matrix, target);
      expect(result).toBe(expected);
    });
  });
});
