import { subsetsWithDup } from '../../src/leetcode/90.js';
import { arrToStr } from '../util.js';

describe('90. Subsets II', () => {
  [
    [
      [1, 2, 2],
      [[1, 2, 2], [1, 2], [1], [2, 2], [2], []],
    ],
    [[0], [[0], []]],
    [
      [4, 4, 4, 1, 4],
      [
        [1, 4, 4, 4, 4],
        [1, 4, 4, 4],
        [4, 4, 4, 4],
        [4, 4, 4],
        [1, 4, 4],
        [4, 4],
        [1, 4],
        [4],
        [1],
        [],
      ],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = subsetsWithDup(input);
      expect(result).toEqual(expected);
    });
  });
});
