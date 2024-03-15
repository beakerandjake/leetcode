import { inorderTraversal } from '../src/94.js';
import { arrToStr, arrToBst } from './util.js';

describe('94. Binary Tree In Order Traversal', () => {
  [
    [
      [1, null, 2, 3],
      [1, 3, 2],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = inorderTraversal(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
