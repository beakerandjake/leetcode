import { isBalanced } from '../../src/leetcode/110.js';
import { arrToStr } from '../util.js';
import { arrToBst } from './util.js';

describe('110. Balanced Binary Tree', () => {
  [
    [[3, 9, 20, null, null, 15, 7], true],
    [[1, 2, 2, 3, 3, null, null, 4, 4], false],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = isBalanced(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
