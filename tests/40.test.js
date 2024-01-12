import { combinationSum2 } from '../src/40.js';
import { arrToStr } from './util.js';

describe('40. Combination Sum II', () => {
  [
    [
      [10, 1, 2, 7, 6, 1, 5],
      8,
      [
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6],
      ],
    ],
    [[2, 5, 2, 1, 2], 5, [[1, 2, 2], [5]]],
    [
      [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ],
      30,
      [
        [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
          1, 1, 1,
        ],
      ],
    ],
  ].forEach(([input, target, expected]) => {
    test(`${arrToStr(input)},${target} -> ${arrToStr(expected)}`, () => {
      const result = combinationSum2(input, target);
      expect(result).toEqual(expected);
    });
  });
});
