import { singleNumber } from '../src/leetcode/136';
import { arrToStr } from './util.js';

describe('136. Single Number', () => {
  [
    [[2, 2, 1], 1],
    [[4, 1, 2, 1, 2], 4],
    [[1], 1],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = singleNumber(input);
      expect(result).toBe(expected);
    });
  });
});
