import { subsetXORSum } from '../src/leetcode/1863.js';
import { arrToStr } from './util.js';

describe('1863. Sum of all Subset XOR totals', () => {
  [
    [[1, 3], 6],
    [[5, 1, 6], 28],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = subsetXORSum(input);
      expect(result).toBe(expected);
    });
  });
});
