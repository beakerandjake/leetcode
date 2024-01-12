import { preorderTraversal } from '../src/144.js';
import { arrToStr } from './util.js';
import { arrToBst } from './util.js';

describe('144. Binary Tree Pre Order Traversal', () => {
  [
    [
      [1, null, 2, null, null, 3],
      [1, 2, 3],
    ],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = preorderTraversal(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
