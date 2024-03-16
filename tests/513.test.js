import { findBottomLeftValue } from '../src/513.js';
import { arrToBst, arrToStr } from './util.js';

describe('513. Find Bottom Left Tree Value', () => {
  [
    [[2, 1, 3], 1],
    [[1, 2, 3, 4, null, 5, 6, null, null, 7], 7],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = findBottomLeftValue(arrToBst(input));
      expect(result).toBe(expected);
    });
  });
});
