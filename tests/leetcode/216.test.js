import { combinationSum3 } from '../../src/leetcode/216.js';
import { arrToStr } from '../util.js';

describe('216. Combination Sum III', () => {
  [
    [3, 7, [[1, 2, 4]]],
    [
      3,
      9,
      [
        [1, 2, 6],
        [1, 3, 5],
        [2, 3, 4],
      ],
    ],
  ].forEach(([k,n, expected]) => {
    test(`${k},${n} -> ${arrToStr(expected)}`, () => {
      const result = combinationSum3(k,n);
      expect(result).toEqual(expected);
    });
  });
});
