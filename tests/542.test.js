import { updateMatrix } from '../src/542.js';
import { arrToStr } from './util.js';

describe('542. 01 Matrix', () => {
  [
    [
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ],
    ],
    [
      [
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
      [
        [0, 0, 0],
        [0, 1, 0],
        [1, 2, 1],
      ],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = updateMatrix(input);
      expect(result).toEqual(expected);
    });
  });
});
