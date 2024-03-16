import { findSpecialInteger } from '../src/1287.js';
import { arrToStr } from './util.js';

describe('1287. Element Appearing More Than 25% In Sorted Array', () => {
  [
    [[1, 2, 2, 6, 6, 6, 6, 7, 10], 6],
    [[1, 1], 1],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findSpecialInteger(input);
      expect(result).toBe(expected);
    });
  });
});
