import { sortedSquares } from '../src/977.js';
import { arrToStr } from './util.js';

describe('977. Squares of a Sorted Array', () => {
  [
    [
      [-4, -1, 0, 3, 10],
      [0, 1, 9, 16, 100],
    ],
    [
      [-7, -3, 2, 3, 11],
      [4, 9, 9, 49, 121],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = sortedSquares(input);
      expect(result).toEqual(expected);
    });
  });
});
