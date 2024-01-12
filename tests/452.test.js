import { findMinArrowShots } from '../src/leetcode/452.js';
import { arrToStr } from './util.js';

describe('452. Minimum Number of Arrows to Burst Balloons', () => {
  [
    [
      [
        [10, 16],
        [2, 8],
        [1, 6],
        [7, 12],
      ],
      2,
    ],
    [
      [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ],
      4,
    ],
    [
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 5],
      ],
      2,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findMinArrowShots(input);
      expect(result).toBe(expected);
    });
  });
});
