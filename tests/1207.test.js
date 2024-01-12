import { uniqueOccurrences } from '../src/leetcode/1207.js';
import { arrToStr } from './util.js';

describe('1207. Unique Number of Occurrences', () => {
  [
    [[1, 2, 2, 1, 1, 3], true],
    [[1, 2], false],
    [[-3, 0, 1, -3, 1, 1, 1, -3, 10, 0], true],
  ].forEach(([input, expected]) => {
    test(`${arrToStr(input)} -> ${expected}`, () => {
      const result = uniqueOccurrences(input);
      expect(result).toBe(expected);
    });
  });
});
