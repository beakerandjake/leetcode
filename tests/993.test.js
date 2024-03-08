import { isCousins } from '../src/993.js';
import { arrToBst, arrToStr } from './util.js';

describe('993. Cousins in Binary Tree', () => {
  [
    [[1, 2, 3, 4], 4, 3, false],
    [[1, 2, 3, null, 4, null, 5], 5, 4, true],
    [[1, 2, 3, null, 4], 2, 3, false],
  ].forEach(([input, a, b, expected]) => {
    test(`${arrToStr(input)},${a},${b} -> ${expected}`, () => {
      const result = isCousins(arrToBst(input), a, b);
      expect(result).toBe(expected);
    });
  });
});
