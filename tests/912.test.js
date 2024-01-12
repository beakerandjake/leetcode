import { sortArray } from '../src/leetcode/912.js';
import { arrToStr } from './util.js';

describe('912. Sort an Array', () => {
  [
    [
      [5, 2, 3, 1],
      [1, 2, 3, 5],
    ],
    [
      [5, 1, 1, 2, 0, 0],
      [0, 0, 1, 1, 2, 5],
    ],
    [[1], [1]],
    [
      [-5, 200, 12, 4, -209, 0, 44, 1234, -2781],
      [-2781, -209, -5, 0, 4, 12, 44, 200, 1234],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = sortArray(input);
      expect(result).toEqual(expected);
    });
  });
});
