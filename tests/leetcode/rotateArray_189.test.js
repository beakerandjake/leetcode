import { rotate } from '../../src/leetcode/rotateArray_189.js';
import { arrToStr } from '../util.js';

describe('189. Rotate Array', () => {
  [
    [[1, 2, 3, 4, 5, 6, 7], 3, [5, 6, 7, 1, 2, 3, 4]],
    [[-1, -100, 3, 99], 2, [3, 99, -1, -100]],
    [[1, 2, 3, 4, 5], 1, [5, 1, 2, 3, 4]],
    [[1, 2, 3, 4, 5], 2, [4, 5, 1, 2, 3]],
  ].forEach(([array, k, expected]) => {
    test(`${arrToStr(array)} by ${k} = ${arrToStr(expected)}`, () => {
      rotate(array, k);
      expect(array).toEqual(expected);
    });
  });
});
