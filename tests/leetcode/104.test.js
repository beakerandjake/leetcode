import { maxDepth } from '../../src/leetcode/104.js';
import { arrToStr } from '../util.js';
import { arrayToBinaryTree } from './util.js';

describe('104. Maximum Depth of Binary Tree', () => {
  [
    [[3, 9, 20, null, null, 15, 7], 3],
    [[1, null, 2], 2],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = maxDepth(arrayToBinaryTree(input));
      expect(result).toBe(expected);
    });
  });
});