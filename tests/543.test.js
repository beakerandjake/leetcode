import { diameterOfBinaryTree } from '../src/543.js';
import { arrToBst, arrToStr } from './util.js';

describe('543. Diameter of Binary Tree', () => {
  [
    // replace with real test data
    [[1, 2, 3, 4, 5], 3],
    [[1, 2], 1],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = diameterOfBinaryTree(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
