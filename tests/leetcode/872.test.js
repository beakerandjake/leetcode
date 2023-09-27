import { leafSimilar } from '../../src/leetcode/872.js';
import { arrToStr } from '../util.js';
import { arrayToBinaryTree } from './util.js';

describe('872. Leaf-Similar Trees', () => {
  [
    [
      [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
      [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8],
      true,
    ],
    [[1, 2, 3], [1, 3, 2], false],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${expected}`, () => {
      const result = leafSimilar(arrayToBinaryTree(a), arrayToBinaryTree(b));
      expect(result).toBe(expected);
    });
  });
});
