import { reconstructQueue } from '../src/406.js';
import { arrToStr } from './util.js';

describe('406. Queue Reconstruction by Height', () => {
  [
    [
      [
        [7, 0],
        [4, 4],
        [7, 1],
        [5, 0],
        [6, 1],
        [5, 2],
      ],
      [
        [5, 0],
        [7, 0],
        [5, 2],
        [6, 1],
        [4, 4],
        [7, 1],
      ],
    ],
    [
      [
        [6, 0],
        [5, 0],
        [4, 0],
        [3, 2],
        [2, 2],
        [1, 4],
      ],
      [
        [4, 0],
        [5, 0],
        [2, 2],
        [3, 2],
        [1, 4],
        [6, 0],
      ],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = reconstructQueue(input);
      expect(result).toEqual(expected);
    });
  });
});
