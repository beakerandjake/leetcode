import { eraseOverlapIntervals } from '../src/435.js';
import { arrToStr } from './util.js';

describe('435. Non-overlapping Intervals', () => {
  [
    [
      [
        [1, 2],
        [2, 3],
        [3, 4],
        [1, 3],
      ],
      1,
    ],
    [
      [
        [1, 2],
        [1, 2],
        [1, 2],
      ],
      2,
    ],
    [
      [
        [1, 2],
        [2, 3],
      ],
      0,
    ],
    [[[1, 2]], 0],
    [
      [
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12],
      ],
      2,
    ],
    [
      [
        [0, 2],
        [1, 3],
        [1, 3],
        [2, 4],
        [3, 5],
        [3, 5],
        [4, 6],
      ],
      4,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = eraseOverlapIntervals(input);
      expect(result).toBe(expected);
    });
  });
});
