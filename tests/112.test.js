import { hasPathSum } from '../src/112.js';
import { arrToStr } from './util.js';
import { arrToBst } from './util.js';

describe('112. Path Sum', () => {
  [
    [[5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22, true],
    [[1, 2, 3], 5, false],
    [[], 0, false],
    [[1, 2], 0, false],
  ].forEach(([input, sum, expected]) => {
    test(`${arrToStr(input)},${sum} -> ${expected}`, () => {
      const result = hasPathSum(arrToBst(input), sum);
      expect(result).toBe(expected);
    });
  });
});
