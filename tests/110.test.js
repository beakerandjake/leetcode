import { isBalanced } from '../src/110.js';
import { arrToStr, arrToBst } from './util.js';

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
