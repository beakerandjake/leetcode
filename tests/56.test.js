import { merge } from '../src/56.js';
import { arrToStr } from './util.js';

describe('56. Merge Intervals', () => {
  [
    [
      [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
      [
        [1, 6],
        [8, 10],
        [15, 18],
      ],
    ],
    [
      [
        [1, 4],
        [4, 5],
      ],
      [[1, 5]],
    ],
    [
      [
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [1, 10],
      ],
      [[1, 10]],
    ],
    [
      [
        [2, 3],
        [4, 6],
        [5, 7],
        [3, 4],
      ],
      [[2, 7]],
    ],
    [
      [
        [1, 4],
        [5, 6],
      ],
      [
        [1, 4],
        [5, 6],
      ],
    ],
    [
      [
        [2, 3],
        [5, 5],
        [2, 2],
        [3, 4],
        [3, 4],
      ],
      [
        [2, 4],
        [5, 5],
      ],
    ],
    [
      [
        [1, 3],
        [8, 10000],
        [3, 8],
      ],
      [[1, 10000]],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = merge(input);
      expect(result).toEqual(expected);
    });
  });
});
