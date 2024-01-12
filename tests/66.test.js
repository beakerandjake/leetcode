import { plusOne } from '../src/66.js';
import { arrToStr } from './util.js';

describe('66. Plus One', () => {
  [
    [
      [1, 2, 3],
      [1, 2, 4],
    ],
    [
      [4, 3, 2, 1],
      [4, 3, 2, 2],
    ],
    [[9], [1, 0]],
    [
      [9, 7, 2],
      [9, 7, 3],
    ],
    [
      [9, 9, 9],
      [1, 0, 0, 0],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = plusOne(input);
      expect(result).toEqual(expected);
    });
  });
});
