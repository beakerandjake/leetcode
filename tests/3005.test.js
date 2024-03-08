import { maxFrequencyElements } from '../src/3005.js';
import { arrToStr } from './util.js';

describe('3005. Count Elements With Maximum Frequency', () => {
  [
    [[1, 2, 2, 3, 1, 4], 4],
    [[1, 2, 3, 4, 5], 5],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = maxFrequencyElements(input);
      expect(result).toBe(expected);
    });
  });
});
