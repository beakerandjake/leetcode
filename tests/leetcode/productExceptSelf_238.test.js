import { productExceptSelf } from '../../src/leetcode/productExceptSelf_238.js';
import { arrToStr } from '../util.js';

describe('238. Product of Array Except Self', () => {
  [
    [
      [1, 2, 3, 4],
      [24, 12, 8, 6],
    ],
    [
      [-1, 1, 0, -3, 3],
      [0, 0, 9, 0, 0],
    ],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${arrToStr(expected)}`, () => {
      const result = productExceptSelf(array);
      // handle edge case with jest and -0 = 0 comparisons when using array
      expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
    });
  });
});
