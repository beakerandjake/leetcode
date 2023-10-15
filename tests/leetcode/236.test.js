import { lowestCommonAncestor } from '../../src/leetcode/236.js';
import { arrToStr } from '../util.js';
import { arrToBst } from './util.js';

describe('236. Lowest Common Ancestor of a Binary Tree', () => {
  [
    [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1, 3],
    [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 6, 4, 5],
    [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4, 5],
    [[1, 2], 1, 2, 1],
    [[1, 2, 3, null, 4], 4, 1, 1],
  ].forEach(([input, p, q, expected]) => {
    test(`${arrToStr(input)},${p},${q} -> ${expected}`, () => {
      const result = lowestCommonAncestor(arrToBst(input), p, q);
      expect(result?.val).toBe(expected);
    });
  });
});
