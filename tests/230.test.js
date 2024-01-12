import { kthSmallest } from '../src/leetcode/230.js';
import { arrToStr } from './util.js';
import { arrToBst } from './leetcode/util.js';

describe('230. Kth Smallest Element in a BST', () => {
  [
    [[3, 1, 4, null, 2], 1, 1],
    [[5, 3, 6, 2, 4, null, null, 1], 3, 3],
  ].forEach(([input, k, expected]) => {
    test(`${arrToStr(input)},${k} -> ${expected}`, () => {
      const result = kthSmallest(arrToBst(input), k);
      expect(result).toBe(expected);
    });
  });
});
