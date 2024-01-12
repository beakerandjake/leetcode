import { permuteUnique } from '../src/47.js';
import { arrToStr } from './util.js';

describe('47. Permutations II', () => {
  [
    [
      [1, 1, 2],
      [
        [1, 1, 2],
        [1, 2, 1],
        [2, 1, 1],
      ],
    ],
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
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = permuteUnique(input);
      expect(result).toEqual(expected);
    });
  });
});
