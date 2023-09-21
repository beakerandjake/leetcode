import { moveZeroes } from '../../src/leetcode/moveZeros_283.js';
import { arrToStr } from '../util.js';

describe('283. Move Zeroes', () => {
  [
    [
      [0, 1, 0, 3, 12],
      [1, 3, 12, 0, 0],
    ],
    [[0], [0]],
    [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
    ],
    [[1], [1]],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${arrToStr(expected)}}`, () => {
      moveZeroes(array);
      expect(array).toEqual(expected);
    });
  });
});
