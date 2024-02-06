import { search } from '../src/704.js';
import { arrToStr } from './util.js';

describe('704. Binary Search', () => {
  [
    [[-1, 0, 3, 5, 9, 12], 9, 4],
    [[-1, 0, 3, 5, 9, 12], 2, -1],
  ].forEach(([input, target, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = search(input, target);
      expect(result).toBe(expected);
    });
  });
});
