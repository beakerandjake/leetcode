import { removeElement } from '../src/leetcode/27.js';
import { arrToStr } from './util.js';

describe('27. Remove Element', () => {
  [
    [[3, 2, 2, 3], 3, [2, 2]],
    [[0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 0, 1, 3, 4]],
    [[3, 3], 3, []],
  ].forEach(([array, val, expected]) => {
    test(`removeElement(${arrToStr(array)}, ${val}) = ${arrToStr(expected)}`, () => {
      const k = removeElement(array, val);
      expect(k).toBe(expected.length);
      const sorted = array.slice(0, k).sort();
      expect(sorted).toEqual(expected);
    });
  });
});
