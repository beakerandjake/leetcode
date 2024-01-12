import { search } from '../src/leetcode/33.js';
import { arrToStr } from './util.js';

describe('33. Search in Rotated Sorted Array', () => {
  [
    [[4, 5, 6, 7, 0, 1, 2], 0, 4],
    [[4, 5, 6, 7, 0, 1, 2], 3, -1],
    [[1], 0, -1],
    [[0, 1, 2, 3, 4, 5, 6, 7], 3, 3],
    [[0, 1, 2, 3, 4, 5, 6, 7], 8, -1],
    [[1, 22, 47, 2888, 22954], 35, -1],
    [[0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 14, 7],
    [[6, 0, 3, 4, 5], 1, -1],
    [[5, 1, 3], 1, 1],
    [[8, 9, 2, 3, 4], 9, 1],
  ].forEach(([input, target, expected]) => {
    test(`${arrToStr(input)},${target} -> ${expected}`, () => {
      const result = search(input, target);
      expect(result).toBe(expected);
    });
  });
});
