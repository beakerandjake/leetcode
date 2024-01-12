import { levelOrder } from '../src/102.js';
import { arrToStr, arrToBst } from './util.js';

describe('102. Binary Tree Level Order Traversal', () => {
  [
    [
      [3, 9, 20, null, null, 15, 7],
      [[3], [9, 20], [15, 7]],
    ],
    [[1], [[1]]],
    [[], []],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${arrToStr(expected)}`, () => {
      const result = levelOrder(arrToBst(input));
      expect(result).toEqual(expected);
    });
  });
});
