import { buildTree } from '../../src/leetcode/105.js';
import { arrToStr } from '../util.js';
import { bstToArr, arrToBst, trimEnd } from './util.js';

describe('105. Construct Binary Tree from PreOrder and InOrder traversal', () => {
  [
    [
      [3, 9, 20, 15, 7],
      [9, 3, 15, 20, 7],
      [3, 9, 20, null, null, 15, 7],
    ],
    [
      [5, 4, 11, 7, 2, 8, 13, 10, 1],
      [7, 11, 2, 4, 5, 13, 8, 1, 10],
      [5, 4, 8, 11, null, 13, 10, 7, 2, null, null, 1],
    ],
  ].forEach(([preOrder, inOrder, expected]) => {
    test(`${arrToStr(preOrder)},${arrToStr(inOrder)} -> ${arrToStr(expected)}`, () => {
      const result = buildTree(preOrder, inOrder);
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
