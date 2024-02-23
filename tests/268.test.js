import { missingNumber } from '../src/268.js';
import { arrToStr } from './util.js';

describe('268. Missing Number', () => {
  [
    [[3, 0, 1], 2],
    [[0, 1], 2],
    [[9, 6, 4, 2, 3, 5, 7, 0, 1], 8],
  ].forEach(([input, expected]) => {
    test(`${input} -> ${expected}`, () => {
      const result = missingNumber(input);
      expect(result).toBe(expected);
    });
  });
});
