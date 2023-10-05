import { insert } from '../../src/leetcode/57.js';
import { arrToStr } from '../util.js';

describe('57. Insert Interval', () => {
  [
    [
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5],
      [
        [1, 5],
        [6, 9],
      ],
    ],
    [
      [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      [4, 8],
      [
        [1, 2],
        [3, 10],
        [12, 16],
      ],
    ],
    [
      [[1, 5]],
      [6, 8],
      [
        [1, 5],
        [6, 8],
      ],
    ],
    [
      [[1, 5]],
      [0, 0],
      [
        [0, 0],
        [1, 5],
      ],
    ],
    [
      [
        [3, 5],
        [12, 15],
      ],
      [6, 6],
      [
        [3, 5],
        [6, 6],
        [12, 15],
      ],
    ],
    [
      [
        [2, 6],
        [9, 10],
        [20, 30],
      ],
      [0, 1],
      [
        [0, 1],
        [2, 6],
        [9, 10],
        [20, 30],
      ],
    ],
    [
      [
        [2, 6],
        [9, 10],
        [20, 30],
      ],
      [45, 69],
      [
        [2, 6],
        [9, 10],
        [20, 30],
        [45, 69],
      ],
    ],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${arrToStr(expected)}`, () => {
      const result = insert(a, b);
      expect(result).toEqual(expected);
    });
  });
});
