import { permute } from '../../src/leetcode/46.js';
import { arrToStr } from '../util.js';

describe('46. Permutations', () => {
  [
    [
      [1, 2, 3],
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ],
    ],
    [
      [0, 1],
      [
        [0, 1],
        [1, 0],
      ],
    ],
    [[1], [[1]]],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = permute(input);
      expect(result).toEqual(expected);
    });
  });
});
