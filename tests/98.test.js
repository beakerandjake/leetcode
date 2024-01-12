import { isValidBST } from '../src/98.js';
import { arrToStr, arrToBst } from './util.js';

describe('98. Validate Binary Search Tree', () => {
  [
    [[2, 1, 3], true],
    [[5, 1, 4, null, null, 3, 6], false],
    [[5, 4, 6, null, null, 3, 7], false],
    [[32, 26, 47, 19, null, null, 56, null, 27], false],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = isValidBST(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
