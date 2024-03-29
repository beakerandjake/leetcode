import { findMinArrowShots } from '../src/452.js';
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
    [
      [
        [3, 9],
        [7, 12],
        [3, 8],
        [6, 8],
        [9, 10],
        [2, 9],
        [0, 9],
        [3, 9],
        [0, 6],
        [2, 8],
      ],
      2,
    ],
    [
      [
        [9, 12],
        [1, 10],
        [4, 11],
        [8, 12],
        [3, 9],
        [6, 9],
        [6, 7],
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
