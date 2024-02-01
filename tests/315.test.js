import { countSmaller } from '../src/315.js';
import { arrToStr } from './util.js';

describe('315. Count of Smaller Numbers After Self', () => {
  [
    [
      [5, 2, 6, 1],
      [2, 1, 1, 0],
    ],
    [[-1], [0]],
    [
      [-1, -1],
      [0, 0],
    ],
    [
      [6, 5, 20, 9, 1],
      [2, 1, 2, 1, 0],
    ],
    [
      [
        26, 78, 27, 100, 33, 67, 90, 23, 66, 5, 38, 7, 35, 23, 52, 22, 83, 51, 98, 69, 81,
        32, 78, 28, 94, 13, 2, 97, 3, 76, 99, 51, 9, 21, 84, 66, 65, 36, 100, 41,
      ],
      [
        10, 27, 10, 35, 12, 22, 28, 8, 19, 2, 12, 2, 9, 6, 12, 5, 17, 9, 19, 12, 14, 6,
        12, 5, 12, 3, 0, 10, 0, 7, 8, 4, 0, 0, 4, 3, 2, 0, 1, 0,
      ],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = countSmaller(input);
      expect(result).toEqual(expected);
    });
  });
});
