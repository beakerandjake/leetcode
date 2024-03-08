import { findBuildings } from '../src/1762.js';
import { arrToStr } from './util.js';

describe('1762. Buildings With an Ocean View', () => {
  [
    [
      [4, 2, 3, 1],
      [0, 2, 3],
    ],
    [
      [4, 3, 2, 1],
      [0, 1, 2, 3],
    ],
    [[1, 3, 2, 4], [3]],
    [
      [6, 88, 57, 20, 51, 49, 36, 35, 54, 63, 62, 46, 3],
      [1, 9, 10, 11, 12],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = findBuildings(input);
      expect(result).toEqual(expected);
    });
  });
});
