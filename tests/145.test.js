import { postorderTraversal } from '../src/145.js';
import { arrToStr, arrToBst } from './util.js';

describe('145. Binary Tree Post Order Traversal', () => {
  [
    [
      [1, null, 2, 3],
      [3, 2, 1],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = postorderTraversal(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
