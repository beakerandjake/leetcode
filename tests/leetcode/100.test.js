import { isSameTree } from '../../src/leetcode/100.js';
import { arrToStr } from '../util.js';
import { arrToBst } from './util.js';

describe('100. Same Tree', () => {
  [
    [[1, 2, 3], [1, 2, 3], true],
    [[1, 2], [1, null, 2], false],
    [[1, 2, 1], [1, 1, 2], false],
  ].forEach(([a, b, expected]) => {
    test(`${arrToStr(a)},${arrToStr(b)} -> ${expected}`, () => {
      const result = isSameTree(arrToBst(a), arrToBst(b));
      expect(result).toBe(expected);
    });
  });
});
