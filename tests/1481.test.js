import { findLeastNumOfUniqueInts } from '../src/1481.js';
import { arrToStr } from './util.js';

describe('1481. Least Number of Unique Integers after K Removals', () => {
  [
    [[5, 5, 4], 1, 1],
    [[4, 3, 1, 1, 3, 3, 2], 3, 2],
  ].forEach(([arr, k, expected]) => {
    test(`${arrToStr(arr)}, ${k} -> ${expected}`, () => {
      const result = findLeastNumOfUniqueInts(arr, k);
      expect(result).toBe(expected);
    });
  });
});
