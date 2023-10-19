import { sortArray } from '../../src/leetcode/912.js';
import { arrToStr } from '../util.js';

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
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = sortArray(input);
      expect(result).toEqual(expected);
    });
  });
});
