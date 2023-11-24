import { pathSum } from '../../src/leetcode/437.js';
import { arrToStr } from '../util.js';
import { arrToBst } from './util.js';

describe('437. Path Sum III', () => {
  [
    [[10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], 8, 3],
    [[5, 3, 2, 3, -2, null, 1], 8, 2],
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1], 22, 3],
    [[1, 2], 1, 1],
    [[1, 2], 2, 1],
    [[0, 1, 1], 1, 4],
    [[4], 4, 1],
    [[4], 5, 0],
  ].forEach(([tree, target, expected]) => {
    test(`${arrToStr(tree)},${target} -> ${expected}`, () => {
      const result = pathSum(arrToBst(tree), target);
      expect(result).toBe(expected);
    });
  });
});
