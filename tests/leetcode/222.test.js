import { countNodes } from '../../src/leetcode/222.js';
import { arrToStr } from '../util.js';
import { arrayToBinaryTree } from './util.js';

describe('222. Count Complete Tree Nodes', () => {
  [
    [[1, 2, 3, 4, 5, 6], 6],
    [[], 0],
    [[1], 1],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = countNodes(arrayToBinaryTree(input));
      expect(result).toBe(expected);
    });
  });
});