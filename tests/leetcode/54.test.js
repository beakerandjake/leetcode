import { spiralOrder } from '../../src/leetcode/54.js';
import { arrToStr } from '../util.js';

describe('54. Spiral Matrix', () => {
  [
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [1, 2, 3, 6, 9, 8, 7, 4, 5],
    ],
    [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
      ],
      [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
    ],
    [
      [
        [1, 2, 3, 4, 5],
        [14, 15, 16, 17, 6],
        [13, 20, 19, 18, 7],
        [12, 11, 10, 9, 8],
      ],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = spiralOrder(input);
      expect(result).toEqual(expected);
    });
  });
});
