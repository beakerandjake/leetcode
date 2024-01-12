import { getRow } from '../src/leetcode/119.js';
import { arrToStr } from './util.js';

describe('119. Pascals Triangle II', () => {
  [
    [0, [1]],
    [1, [1, 1]],
    [2, [1, 2, 1]],
    [3, [1, 3, 3, 1]],
    [4, [1, 4, 6, 4, 1]],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${arrToStr(expected)}`, () => {
      const result = getRow(input);
      expect(result).toEqual(expected);
    });
  });
});
