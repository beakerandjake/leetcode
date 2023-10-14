import { isSymmetric } from '../../src/leetcode/101.js';
import { arrToStr } from '../util.js';
import { arrToBst } from './util.js';

describe('101. Symmetric Tree', () => {
  [
    [[1, 2, 2, 3, 4, 4, 3], true],
    [[1, 2, 2, null, 3, null, 3], false],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = isSymmetric(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
