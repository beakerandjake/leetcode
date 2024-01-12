import { minPathSum } from '../src/64.js';
import { arrToStr } from './util.js';

describe('64. Minimum Path Sum', () => {
  [
    [
      [
        [1, 3, 1],
        [1, 5, 1],
        [4, 2, 1],
      ],
      7,
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
      ],
      12,
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = minPathSum(input);
      expect(result).toBe(expected);
    });
  });
});
