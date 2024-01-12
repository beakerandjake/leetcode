import { maxDepth } from '../src/104.js';
import { arrToStr, arrToBst } from './util.js';

describe('104. Maximum Depth of Binary Tree', () => {
  [
    [[3, 9, 20, null, null, 15, 7], 3],
    [[1, null, 2], 2],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = maxDepth(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
