import { merge } from '../src/88.js';
import { arrToStr } from './util.js';

describe('88. Merge Sorted Array', () => {
  [
    [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
    [[1], 1, [], 0, [1]],
    [[0], 0, [1], 1, [1]],
  ].forEach(([a, m, b, n, expected]) => {
    test(`merge(${arrToStr(a)},${arrToStr(b)}) = ${arrToStr(expected)}`, () => {
      merge(a, m, b, n);
      expect(a).toEqual(expected);
    });
  });
});
