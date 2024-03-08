import { imageSmoother } from '../src/661.js';
import { arrToStr } from './util.js';

describe('661. Image Smoother', () => {
  [
    [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],

      [
        [3, 3, 4],
        [4, 5, 5],
        [6, 6, 7],
      ],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = imageSmoother(input);
      expect(result).toEqual(expected);
    });
  });
});
