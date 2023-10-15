import { postorderTraversal } from '../../src/leetcode/145.js';
import { arrToStr } from '../util.js';
import { arrToBst } from './util.js';

describe('145. Binary Tree Post Order Traversal', () => {
  [
    [
      [1, null, 2, null, null, 3],
      [3, 2, 1],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = postorderTraversal(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
