import { containsNearbyDuplicate } from '../../src/leetcode/219.js';
import { arrToStr } from '../util.js';

describe('219. Contains Duplicate II', () => {
  [
    [[1, 2, 3, 1], 3, true],
    [[1, 0, 1, 1], 1, true],
    [[1, 2, 3, 1, 2, 3], 2, false],
  ].forEach(([arr, k, expected]) => {
    test(`${arrToStr(arr)},${k} -> ${expected}`, () => {
      const result = containsNearbyDuplicate(arr, k);
      expect(result).toBe(expected);
    });
  });
});
