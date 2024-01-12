import { majorityElement } from '../src/leetcode/169.js';
import { arrToStr } from './util.js';

describe('169. Majority Element', () => {
  [
    [[3, 2, 3], 3],
    [[2, 2, 1, 1, 1, 2, 2], 2],
  ].forEach(([array, expected]) => {
    test(`${arrToStr(array)} -> ${expected}`, () => {
      const result = majorityElement(array);
      expect(result).toEqual(expected);
    });
  });
});
