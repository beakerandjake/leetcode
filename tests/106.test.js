import { buildTree } from '../src/leetcode/106.js';
import { arrToStr } from './util.js';
import { bstToArr, arrToBst, trimEnd } from './leetcode/util.js';

describe('106. Construct Binary Tree from In Order and Post Order traversal', () => {
  [
    [
      [9, 3, 15, 20, 7],
      [9, 15, 7, 20, 3],
      [3, 9, 20, null, null, 15, 7],
    ],
    [
      [2, 1],
      [2, 1],
      [1, 2],
    ],
  ].forEach(([inOrder, postOrder, expected]) => {
    test(`${arrToStr(inOrder)}, ${arrToStr(postOrder)} -> ${arrToStr(expected)}`, () => {
      const result = buildTree(inOrder, postOrder);
      expect(trimEnd(bstToArr(result))).toEqual(expected);
    });
  });
});
