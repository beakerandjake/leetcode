import { findPeakElement } from '../src/162.js';
import { arrToStr } from './util.js';

describe('162. Find Peak Element', () => {
  [
    [[1, 2, 3, 1], 2],
    [[1, 2, 1, 3, 5, 6, 4], 5],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findPeakElement(input);
      expect(result).toBe(expected);
    });
  });
});
